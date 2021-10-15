import io
import os

from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

from googleapiclient.discovery import build
import googleapiclient.errors

from googleapiclient.http import MediaIoBaseDownload

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]

def cap_id_to_caption():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    #os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "./secrets/client_secret.json"

    # Get credentials and create an API client
    flow = InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    flow.run_local_server(port=8080, prompt="consent")
    #credentials = flow.credentials
    #print(credentials.to_json())
   # youtube = build(
   #     api_service_name, api_version, credentials=credentials)

   # request = youtube.captions().download(
   #     id="8yMV7mc691ajCze115cxb5goeKsI0BJn"
   # )
   # fh = io.FileIO("caption.txt", "wb")

   # download = MediaIoBaseDownload(fh, request)
   # complete = False
   # while not complete:
   #   status, complete = download.next_chunk()


if __name__ == "__main__":
    cap_id_to_caption()
