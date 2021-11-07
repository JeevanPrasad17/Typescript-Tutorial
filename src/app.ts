class DataStorage<T> {
     private extractData:T[]=[];
    addItem(item:T){
         this.extractData.push(item);
     }     removeItem(item:T){
         this.extractData.splice(this.extractData.indexOf(item),1)
     }
    get getData(){
         return this.extractData;
     }
 }
 const genData = new DataStorage<string>();
 genData.addItem('Arun');
 genData.addItem('Jeevan');
 genData.addItem('Phani');
 console.log(genData.getData)
 genData.removeItem('Phani')
 console.log(genData.getData)

