// apiClient.js
// Example API client setup with cleaned unused vars

export async function fetchData(url, options = {}) {
  try {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(`HTTP error ${res.status}`)
    return await res.json()
  } catch (_err) {
    console.error("API fetch error:", _err)
    throw _err
  }
}
