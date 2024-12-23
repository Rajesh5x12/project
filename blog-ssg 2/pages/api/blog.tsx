export async function getData() {
    const response = await fetch('https://api.vercel.app/blog/1')
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(res:any) {
    const jsonData = await getData()
    res.status(200).json(jsonData)
}