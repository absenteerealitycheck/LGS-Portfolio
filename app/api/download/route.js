import { google } from "googleapis";
import { NextResponse } from "next/server";

const drive = google.drive({
  version: "v3",
  auth: "YOUR API KEY",
});
