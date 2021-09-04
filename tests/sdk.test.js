const { FirestoreManager, Document } = require('../dist/index');
const { FieldValue } = require('@google-cloud/firestore');

async function sleep() {
  await new Promise(r => setTimeout(r, 500));
}

const testDocument = {
  testField: "testValue"
}

// tests
describe('SDK estension', () => {

  const manager = new FirestoreManager();
  const document = new Document('testCollection/testDocument');
  const createdDocument = new Document('testCollection/createdDocument');

  it('should get a document field', async() => {
    await document.initialize();
    await sleep();
    expect(await document.get('testField')).toEqual('testValue')
  });

  it('should update a document field', async() => {
    await document.update({ updated: true });
    await sleep();
    expect(await document.get('updated')).toEqual(true);
  });

  it('should delete a document field', async() => {
    await document.update({ updated: FieldValue.delete() });
    await sleep();
    expect(await document.get('updated')).toEqual(undefined);
  });

  it('should create a document', async() => {
    await createdDocument.initialize();
    await sleep();
    await createdDocument.update({ exists: true });
    await sleep();
    expect(await createdDocument.get('exists')).toEqual(true);
  });

  it('should delete a document', async() => {
    await createdDocument.delete();
    await sleep();
    expect(await createdDocument.deleted).toEqual(true);
  });
});