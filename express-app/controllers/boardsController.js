const { promises: fs } = require('fs')
const _ = require('lodash')
const postController = async (body) => {
  try {
    let { data, total } = JSON.parse(await fs.readFile('mock-data.json', 'utf-8'))
    console.log('data is: ', data);
    const newItem = {
      id: total + 1,
      title: body.title,
      stage: 1
    }
    data.push(newItem)
    total += 1
    console.log('new data: ', JSON.stringify({ data, total }))

    await fs.writeFile('mock-data.json', JSON.stringify({ data, total }))
    return { success: newItem }
  } catch (error) {
    return { error: error }
  }
}

const putController = async (body) => {
  let { data, total } = JSON.parse(await fs.readFile('mock-data.json', 'utf-8'))
  console.log('data is: ', data);
  const index = _.findIndex(data, function (o) { return o.id == body.id })
  let updatedItem = null
  if (index != -1) {
    console.log('item found at:', index, data[index]);
    updatedItem = {
      id: data[index].id,
      title: body.title,
      stage: 2
    }
    data[index] = updatedItem
    await fs.writeFile('mock-data.json', JSON.stringify({ data, total }))
    return { success: updatedItem }
  }
  console.log('no item found');
  return { error: 'invalid input' }
}

module.exports.postController = postController
module.exports.putController = putController