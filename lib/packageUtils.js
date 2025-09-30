// lib/packageUtils.js
export async function serveZipPackage(config, filename = "ar.zip") {
  try {
    const myPackage = new Package(config)

    const base64 = await myPackage.serve({ packageType: "zip" })
    const link = document.createElement("a")
    link.href = `data:application/zip;base64,${base64}`
    link.download = filename
    link.click()
  } catch (err) {
    console.error("Error serving package:", err)
  }
}

export async function publishToGitHub(session, token, message = "commit from XR Studio") {
  try {
    const myPackage = new Package(session)
    const pagesUrl = await myPackage.serve({
      packageType: "github",
      token,
      message,
    })
    console.log("Published to:", pagesUrl)
    return pagesUrl
  } catch (err) {
    console.error("Error publishing package:", err)
    return null
  }
}
