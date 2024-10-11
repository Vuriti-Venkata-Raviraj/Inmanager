from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

# Load the saved credentials from token.json
creds = Credentials.from_authorized_user_file('token.json', ['https://www.googleapis.com/auth/gmail.readonly'])

# Build the Gmail API service using the credentials
service = build('gmail', 'v1', credentials=creds)

# Fetch unread emails
results = service.users().messages().list(userId='me', q="is:unread").execute()
messages = results.get('messages', [])

if not messages:
    print("No unread emails found.")
else:
    print(f"Total unread messages: {len(messages)}")
    for message in messages:
        msg = service.users().messages().get(userId='me', id=message['id']).execute()
        print(f"Message snippet: {msg['snippet']}")
