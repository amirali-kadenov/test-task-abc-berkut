export const downloadFile = async (fileUrl: string, fileName: string) => {
  try {
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()

    URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Download failed:", error)
  }
}
