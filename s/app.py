from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow requests from any origin (helpful during local development)

# Mail server configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  # Load email from .env
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASS')  # Load password from .env

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    # Log incoming request data
    data = request.json
    print("Received data:", data)

    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    phone = data.get('phone', 'N/A')
    message = data.get('message')

    # Validate input
    if not first_name or not last_name or not email or not message:
        return jsonify({'code': 400, 'message': 'All fields are required!'}), 400

    # Create the email message
    msg = Message(
        subject=f"New Contact Form Submission from {first_name} {last_name}",
        sender=app.config['MAIL_USERNAME'],  # Your email from .env
        recipients=['gy1413ww@gmail.com'],  # Replace with your recipient email
        body=f"""
        You have received a new message from your website contact form.

        Name: {first_name} {last_name}
        Email: {email}
        Phone: {phone}
        Message: {message}
        """
    )

    try:
        mail.send(msg)
        return jsonify({'code': 200, 'message': 'Message sent successfully!'}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({'code': 500, 'message': 'Failed to send email. Please try again later.'}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)


