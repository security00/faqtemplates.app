'use client';

export default function DownloadButton() {
  return (
    <button
      onClick={() => {
        alert('Download functionality will be implemented in the next version!');
      }}
      className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
    >
      Download Template
    </button>
  );
}
