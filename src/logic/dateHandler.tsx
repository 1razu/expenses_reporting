
const monthShortString = new Date(Date.now()).toLocaleString('en-US', { month: 'short'});

const dayMonthYear = new Date().toLocaleDateString('en-GB'); 

function dateToShortString(date:string) {
    
    return new Date(date).toLocaleString('en-US', { month: 'short', day:"numeric", year:"numeric" })
};

export default {
    monthShortString : monthShortString,
    dayMonthYear : dayMonthYear,
    dateToShortString : dateToShortString
}