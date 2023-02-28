export default function handler(req, res) {
    res.status(200).json({ text: 'hello'});
    res.setPreviewData({});
    res.end('Preview mode enabled');

}