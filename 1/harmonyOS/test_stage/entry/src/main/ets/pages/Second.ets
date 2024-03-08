//Second.ets
import router from '@ohos.router';
@Entry
@Component
struct Second{
  @State message: string ='Hi there'

  build(){
    Row(){
      Column(){
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button(){
          Text('Back')
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
          console.info('click')
          try {
            router.back()
            console.info('return')
          }catch (err){
            console.error('error')
          }
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}