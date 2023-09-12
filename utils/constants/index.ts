export const ACCESS_TOKEN = process.env.TMBD_ACCESS_TOKEN_AUTH!

export const formatDate = (inputDate: string) => {
    const dateObj = new Date(inputDate);

    // Define arrays for day and month names
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get the day of the week, day of the month, and year
    const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];
    const dayOfMonth = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    // Format the date
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${year}`;
    return formattedDate
}

export const formatToUtcDate = (inputDateStr: string) => {
    const inputDate = new Date(inputDateStr)

    const utcDate = new Date(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate(),
        0, 0, 0
    )

    const formattedDate = utcDate.toISOString()
    return formattedDate
}

export const shortenText = (text: string, maxWords: number) => {
    if (text.length > maxWords) {
        return text.slice(0, maxWords) + " " + "..."
    }
    return text
}

export const convertToMilliseconds = (dateText: string) => {
    const date = new Date(dateText)
    const milliseconds = date.getTime()
    return milliseconds
}