import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ql3pszjp',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'skFrP8qZpLNJEl4GFFvHVnYcoB4A1MYOp15q3yqiteeVNsZ9ykN4LEyf0e433yMViVxIhSIfkpkXUSg9S8OPBQJuq1PwLYNQ83bdE4DwxBBG4idF0HmSjvGtWYs9utbd7rMNgf6B1EivInGPPsPTutEd4xhKYl8UrGNdk12Cz8I3p0SNw20G',
    useCdn: false,
    ignoreBrowserTokenWarning: true,
})