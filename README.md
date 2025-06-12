# Pinyin API
Pinyin-api is an api service for translating Chinese words to pinyin
# Online Service
The api service was deployed at Vercel with the project https://vercel.com/jaistrs-projects/pinyin-api.
# How to use
Example of calling the pinyin-api:
```shell
curl -X POST -H 'Content-Type:application/json' -d '{"text":"你好世界""}' https://pinyin-api-two.vercel.app/api/pinyin-api
```
Response
```json
{
    "pinyin": "ni3 hao3 shi4 jie4"
}
```

