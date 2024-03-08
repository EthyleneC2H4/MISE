
import router from '@ohos.router';
import url from '@ohos.url';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        //add button
        Button(){
          Text('Next')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .margin({
          top:20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        .height('5%')
        .onClick(()=>{
          console.info('success next')
          //2nd
          router.pushUrl({ url: 'pages/Second' }).then(()=>{
            console.info('2nd page')
          }).catch((err)=>{
            console.error('fail')
          })
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}