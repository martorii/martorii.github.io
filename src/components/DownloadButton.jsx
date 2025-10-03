import { Download } from "lucide-react";

const DownloadButton = ({buttonLabel, filePath}) => {
    const handleDownload = async () => {
        console.log(filePath)
        try {
            const data = await fetch(filePath);
            const blob = await data.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filePath.split('/').at(-1);
            console.log(url)
            console.log(filePath.split('/').at(-1))
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('Failed to download PDF. Please make sure the file exists.');
        }
    };

    return (
        <button
            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            onClick={handleDownload}
        >
            <Download size={20} />
            {buttonLabel}
        </button>
    )
}

export default DownloadButton;