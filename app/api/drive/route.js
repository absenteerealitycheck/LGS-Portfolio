import { google } from "googleapis";
import { NextResponse } from "next/server";
const handler = async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../../nextjsportfolio-452904-a21c18452cc2.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    const response = await drive.files.get({
      fileId: "14vhiqdGSuSf_zWL0qUsxKF4al9EA5EdU",
      alt: "media",
    });

    const resp = new NextResponse(response.data);
    resp.headers.set(
      "Content-Disposition",
      "attachment; filename=LGSResume.pdf"
    );
    resp.headers.set("Content-Length", response.data.length);
    res.status(200).send(Buffer.from(response.data));
    console.log("THE ACTIAL RESPONSE WE SEND BACK: ", resp);
    return resp;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export { handler as GET, handler as POST };
