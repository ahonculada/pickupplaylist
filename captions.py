import io
import os
import pickle
import pprint

from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

from googleapiclient.discovery import build
import googleapiclient.errors

from googleapiclient.http import MediaIoBaseDownload

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]

def cap_id_to_caption():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    #os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "./secrets/client_secret.json"

    credentials = None

    # token.pickle stores the user's credentials from previously successful logins
    if os.path.exists("./secrets/token.pickle"):
        print("Loading Credentials from File...")
        with open("./secrets/token.pickle", "rb") as token:
            credentials = pickle.load(token)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            print('Refreshing Access Token...')
            credentials.refresh(Request())
        else:
            print('Fetching New Tokens...')
            flow = InstalledAppFlow.from_client_secrets_file(
                client_secrets_file,
                scopes,
            )
            flow.run_local_server(
                port=8080,
                prompt="consent",
                authorization_prompt_message="",
            )
            credentials = flow.credentials

            # Save credentials for the next run
            with open("./secrets/token.pickle", "wb") as f:
                print("Saving Credentials for Future Use...")
                pickle.dump(credentials, f)


    # Get credentials and create an API client
    youtube = build(
        api_service_name,
        api_version,
        credentials=credentials,
    )

    request = youtube.captions().list(
        part="snippet",
        videoId="M7FIvfx5J10"
    )

    response = request.execute()

    pprint.pprint(response)
    caption_id = response['items'][0]['id']

    print(caption_id)

    subtitles = youtube.captions().download(
        id="caption_id",
    ).execute()

    print(subtitles)

    #fh = io.FileIO("caption.txt", "wb")

    #download = MediaIoBaseDownload(fh, request)
    #complete = False
    #while not complete:
    #    status, complete = download.next_chunk()


if __name__ == "__main__":
    cap_id_to_caption()
