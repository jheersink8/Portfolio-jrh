export default function Resume() {
    return (
        <>
                <div className='top-space-large top-space-small'></div>
            {/* Resume */}
            <div id="resume">
                <h2>Web Development Resume</h2>
                <embed src='\src\assets\pdf\Heersink - Jordan (Resume) .pdf' type="application/pdf" width='800' height='1000'></embed>

                <h2>IT Leadership Resume</h2>
                <embed src='\src\assets\pdf\Resume - Jordan Heersink.pdf' type="application/pdf" width='800' height='1000'></embed>
            </div>
            <div className='footer-space-large footer-space-small'></div>
        </>
    )
};