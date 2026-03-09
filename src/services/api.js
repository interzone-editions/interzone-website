const API_BASE_URL = "https://interzone-assets.s3.us-east-1.amazonaws.com"

async function fetchData(endpoint, errorMessage = undefined) {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`)
    if (!res.ok) {
        throw {
            message: errorMessage || `Failed to fetch ${endpoint} data`,
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export const useAbout = async () => await fetchData("about.json", "Failed to fetch about page data")

export const useEvents = async () => await fetchData("event-database.json", "Failed to fetch events data")

export const useReleases = async () => await fetchData("release-database.json", "Failed to fetch releases data")

export const useRecent = async () => await fetchData("recent-activities.json", "Failed to fetch home carousel data")
