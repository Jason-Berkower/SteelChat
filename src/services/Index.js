export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/users`;

export const baseURL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE2}/messages`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
