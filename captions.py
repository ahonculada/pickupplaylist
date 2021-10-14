import io
import os

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

from googleapiclient.http import MediaIoBaseDownload

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]

def cap_id_to_caption():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "./secrets/client_secret_793158013939-7f53hkd2ggso2ad1brglva2pp5pnr1kb.apps.googleusercontent.com.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    request = youtube.captions().download(
        id="8yMV7mc691ajCze115cxb5goeKsI0BJn"
    )
    fh = io.FileIO("caption.txt", "wb")

    download = MediaIoBaseDownload(fh, request)
    complete = False
    while not complete:
      status, complete = download.next_chunk()


if __name__ == "__main__":
    cap_id_to_caption()
