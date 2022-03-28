# DRAFT

## Snippet

```js
// fetch static temp data w/ async - index.json

let data = async () => {
	const URL = '/config/server/index.json'
	const response = await fetch(URL)
	const tempData = await response.json()
	return tempData.newsletter || []
}

export const postNewsletter = async (body = {}) => {
	data = (data?.length && data) || (await data())
	data.push({ id: data.length, ...body })
	return new Promise((resolve) => {
		setTimeout(() => {
			console.info('api data ::', data)
			resolve({ success: true, data })
		}, 1000)
	})
}
```
