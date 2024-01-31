import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleRedirect = (baseURL: string) => {
    router.push(`${baseURL}/${url}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Enter URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => handleRedirect('https://example.com')}
          >
            Redirect 1
          </button>
          <button
            className="p-2 text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => handleRedirect('https://example2.com')}
          >
            Redirect 2
          </button>
          <button
            className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
            onClick={() => handleRedirect('https://example3.com')}
          >
            Redirect 3
          </button>
          <button
            className="p-2 text-white bg-purple-500 rounded hover:bg-purple-600"
            onClick={() => handleRedirect('https://example4.com')}
          >
            Redirect 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;