import { AppBarContainer } from "./app-bar-container"

/**
 * Presentation / Styling for App Bar
 * @returns
 */
export const AppBar = () => {

    return (
        <div className="inline-flex flex-row space-x-11 text-center bg-gray-200 shadow-lg font-semibold pr-16 pl-16 pt-2 pb-1 ml-16">
            <AppBarContainer/>
        </div>
    )
}
