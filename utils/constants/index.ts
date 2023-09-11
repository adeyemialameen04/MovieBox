export const ACCESS_TOKEN = process.env.TMBD_ACCESS_TOKEN_AUTH!

export const formatDate = (date: string, locale: string = "en-US") => {
    const formatteddate = new Date(date)
    return formatteddate.toLocaleDateString(locale)
}
// export const formatDate = (date: string, locale: string = "en-US") => {
//     const formattedDate = new Date(date);
//     return formattedDate.toLocaleDateString(locale);
// };