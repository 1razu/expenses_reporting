
const monthShortString = new Date(Date.now()).toLocaleString('en-US', { month: 'short' });

const dayMonthYear = new Date().toLocaleDateString('en-GB'); 

export default {
    monthShortString : monthShortString,
    dayMonthYear : dayMonthYear
}