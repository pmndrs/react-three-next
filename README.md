This is a template based on [`create-r3f-app`](https://github.com/RenaudROHLINGER/create-r3f-app)/[`react-three-next`](https://github.com/pmndrs/react-three-next) that purely exists because I use create-r3f-app all the time for quick testing/ideas/prototypes/pratice/etc, but it's a kind of a dependency hell and has some pesty little bugs, that arent actually something I can submit a pull request for.


## Installation 
1. Clone the repo as a Template
2. ` npm install --force`
3. `npm run dev`

## Changes 

- Gets rid of the DOM at the start, the user has to turn it on.
- Makes the Canvas wrap around a `<Suspense>` for things like GLTF loading.
- Leva comes preinstalled for testing
- Drei and React Three Fiber use newer versions, for things like Instancing. 
- Minor typescript linting fixes.
