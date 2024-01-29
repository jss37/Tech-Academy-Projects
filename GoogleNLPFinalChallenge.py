from google.cloud import language_v1
from google.cloud.language_v1 import enums

def analyze_language(text_content):

    client = language_v1.LanguageServiceClient()

    document = {"content": text_content, "type": enums.Document.Type.PLAIN_TEXT}
    response = client.classify_text(document=document)


    language = response.languages[0].language_code

    return language

def main():
    # Replace 'YOUR_TEXT_CONTENT' with the actual text from your ebook
    ebook_text = "YOUR_TEXT_CONTENT"

    detected_language = analyze_language(ebook_text)

    print(f"The detected language of the ebook is: {detected_language}")

if __name__ == "__main__":
    main()