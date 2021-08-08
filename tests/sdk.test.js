const { FirestoreManager, Collection, Document } = require('../dist/index');

var testDocument = {
  testField: "testValue"
}

// tests
describe('SDK estension', () => {

  const manager = new FirestoreManager();

  it('should get a collection', async() => {
    const collection = new Collection('testCollection');
    expect(await collection.data()).toEqual([testDocument])
  });

  it('should get a document', async() => {
    const document = new Document('testCollection/testDocument');
    expect(await document.data()).toEqual(testDocument)
  });

  it('should create a document', async() => {
    const document = new Document('testWrite/testDocument');
    await document.update(testDocument);
    expect(await document.data()).toEqual(testDocument);
  });

  it('should update a document', async() => {
    const document = new Document('testWrite/testDocument');
    await document.update({updated: true});
    testDocument.updated = true;
    expect(await document.data()).toEqual(testDocument);
  });

  it('should delete a document', async() => {
    const document = new Document('testWrite/testDocument');
    await document.delete();
    expect(await new Document('testWrite/testDocument').data()).toEqual(undefined);
  });
})