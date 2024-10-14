import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);

        try {
            const response = await axios.post('http://127.0.0.1:5000/encrypt_pdf', formData, {
                responseType: 'blob', // Important for handling PDF response
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Create a blob URL for the PDF file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'encrypted_pdf.pdf'); // Specify the file name
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred while encrypting the PDF');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='py-40'>
            <h1>PDF Encryptor</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file">Upload PDF:</label>
                    <input type="file" id="file" accept="application/pdf" onChange={handleFileChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Encrypting...' : 'Encrypt PDF'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}
