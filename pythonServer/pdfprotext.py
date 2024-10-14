from flask import Flask, request, send_file, jsonify 
from flask_cors import CORS
from PyPDF2 import PdfWriter, PdfReader
import io

app = Flask(__name__)
CORS(app=app)
@app.route('/encrypt_pdf', methods=['POST'])
def encrypt_pdf():
    try:
        # Check if the PDF file and password are provided
        if 'file' not in request.files or 'password' not in request.form:
            return jsonify({"error": "Missing PDF file or password"}), 400

        # Get the PDF file from the request
        pdf_file = request.files['file']
        password = request.form['password']

        # Create a PdfWriter object
        pdf_writer = PdfWriter()

        # Read the PDF file using PdfReader
        pdf_reader = PdfReader(pdf_file)

        # Iterate through each page of the original file and add it to the writer
        for page in pdf_reader.pages:
            pdf_writer.add_page(page)

        # Encrypt the PDF with the provided password
        pdf_writer.encrypt(password)

        # Create an in-memory file to save the encrypted PDF
        output_pdf = io.BytesIO()
        pdf_writer.write(output_pdf)

        # Seek to the beginning of the BytesIO object
        output_pdf.seek(0)

        # Return the encrypted PDF as a downloadable file
        return send_file(output_pdf, as_attachment=True, download_name='encrypted_pdf.pdf', mimetype='application/pdf')

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
