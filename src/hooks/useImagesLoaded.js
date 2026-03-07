import { useState, useEffect } from 'react'

export function useImagesLoaded(timeout = 3000) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Track all images on the page
        const images = document.querySelectorAll('img')
        let loadedCount = 0
        let totalCount = images.length

        // If no images, consider loaded
        if (totalCount === 0) {
            setIsLoaded(true)
            return
        }

        const handleImageLoad = () => {
            loadedCount++
            if (loadedCount === totalCount) {
                setIsLoaded(true)
            }
        }

        const handleImageError = () => {
            loadedCount++
            if (loadedCount === totalCount) {
                setIsLoaded(true)
            }
        }

        // Add listeners to all images
        images.forEach((img) => {
            if (img.complete) {
                // Image is already loaded (cached)
                loadedCount++
            } else {
                img.addEventListener('load', handleImageLoad)
                img.addEventListener('error', handleImageError)
            }
        })

        // Check if all are loaded
        if (loadedCount === totalCount) {
            setIsLoaded(true)
        }

        // Fallback timeout - show page after specified time regardless
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, timeout)

        return () => {
            clearTimeout(timer)
            images.forEach((img) => {
                img.removeEventListener('load', handleImageLoad)
                img.removeEventListener('error', handleImageError)
            })
        }
    }, [timeout])

    return isLoaded
}
