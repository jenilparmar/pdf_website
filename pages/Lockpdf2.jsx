import { useState } from 'react';
import axios from 'axios';
import { GrInsecure } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import FooterLinks from '@/Components/FooterLink';
import AppFooter from '@/Components/AppFooter';

export default function Home() {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSecure, setIsSecure] = useState(false); // For secure animation

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
        setIsSecure(false); // Reset to insecure state

        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);

        try {
            const response = await axios.post('http://127.0.0.1:5000/encrypt_pdf', formData, {
                responseType: 'blob',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Create a blob URL for the PDF file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'encrypted_pdf.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();

            // Trigger secure animation after a short delay
            setTimeout(() => {
                setIsSecure(true);
            }, 500); // Delay for animation effect

        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred while encrypting the PDF');
        } finally {
            setLoading(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === 'application/pdf') {
            setFile(droppedFile);
            setError(null); // Reset error state
        } else {
            setError('Only PDF files are allowed.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handlePaste = (e) => {
        const pastedFile = e.clipboardData.files[0];
        if (pastedFile && pastedFile.type === 'application/pdf') {
            setFile(pastedFile);
            setError(null); // Reset error state
        } else {
            setError('Only PDF files are allowed.');
        }
    };

    return (
        <>
        <div className="py-40 flex flex-col items-center">
            <h1 className="text-3xl font-bold">PDF Encryptor</h1>

            {/* Secure Animation Section */}
            <div>
                <div className={`flex items-center justify-center transition-opacity duration-1000 ${isSecure ? 'opacity-100' : 'opacity-0'}`}>
                    <GrSecure className="text-6xl text-green-600" />
                </div>
                <div className={`flex items-center justify-center transition-opacity duration-1000 ${!isSecure ? 'opacity-100' : 'opacity-0'}`}>
                    <GrInsecure className="text-6xl text-red-500" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                {/* Drag-and-Drop Area */}
                <div
                    className="mb-4 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-100 transition duration-150"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById('file-input').click()} // Open file dialog on click
                    onPaste={handlePaste} // Handle paste event
                >
                    <p className="text-gray-600 mb-2">Drop your PDF file here or click to upload</p>
                    {file ? (
                        <p className="text-green-600">File: {file.name}</p>
                    ) : (
                        <p className="text-gray-400">No file selected</p>
                    )}
                    <input
                        type="file"
                        id="file-input"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || !file} // Disable if loading or no file selected
                    className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="loader"></div>
                            <span className="ml-2">Encrypting...</span>
                        </div>
                    ) : (
                        'Encrypt PDF'
                    )}
                </button>

                {error && <p className="mt-4 text-red-500">{error}</p>}
            </form>

            <style jsx>{`
                .loader {
                    border: 4px solid #f3f3f3; /* Light grey */
                    border-top: 4px solid #3498db; /* Blue */
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
            <AppFooter/>
            </>
    );
}
