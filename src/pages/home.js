import * as React from "react"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const HomePage = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>
                It's home.js file
                <br />
                <span style={headingAccentStyles}>— I just made a page in Gatsby site! </span>
                <span role="img" aria-label="Party popper emojis">
                    🎉🎉
                </span>
            </h1>
        </main>
    )
}

export default HomePage