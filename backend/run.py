import os

from dotenv import load_dotenv

from project import app

load_dotenv()

if __name__ == "__main__":
    app.run(debug=os.getenv("DEBUG"))