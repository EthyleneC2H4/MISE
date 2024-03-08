import router from '@ohos.router';
import { DetailListComponent } from '../view/DetailListComponent';
import { CommonConstants } from '../common/constants/CommonConstants';

/**
 * Detail page to display more information.
 */
@Entry
@Component
struct DetailPage {
  private titleParam: Resource = $r('app.string.detail_default_title');

  aboutToAppear() {
    if (router.getParams()) {
      this.titleParam = router.getParams()[CommonConstants.KEY_PARAM_DATA] as Resource;
    }
  }

  build() {
    Column() {
      this.Title()
      // GridRow({
      //   breakpoints: {
      //     value: CommonConstants.BREAK_POINTS_VALUE,
      //     reference: BreakpointsReference.WindowSize
      //   },
      //   columns: {
      //     sm: CommonConstants.COLUMN_SM,
      //     md: CommonConstants.COLUMN_MD,
      //     lg: CommonConstants.COLUMN_LG
      //   },
      //   gutter: { x: CommonConstants.GUTTER_X },
      //   direction: GridRowDirection.Row
      // }) {
      //   GridCol({
      //     span: {
      //       sm: CommonConstants.SPAN_SM,
      //       md: CommonConstants.SPAN_MD,
      //       lg: CommonConstants.SPAN_LG
      //     },
      //     offset: {
      //       md: CommonConstants.OFFSET_MD,
      //       lg: CommonConstants.OFFSET_LG
      //     }
      //   }) {
      //     DetailListComponent()
      //   }
      //   .margin({
      //     left: $r('app.float.detail_grid_row_margin'),
      //     right: $r('app.float.detail_grid_row_margin')
      //   })
      // }
      //
      Row(){
        Text('世界巡回大师赛的成功是三人篮球项目在全球不断普及的缩影。从2010年在新加坡青奥会上的正式亮相，到2021年在东京的奥运首秀，三人篮球以其快节奏强对抗高观赏性的特征成功吸引更多人加入3x3这个大家庭。')
          .fontSize(20)
          .width('100%')

      }
      Image($r('app.media.img'))
        .width(200)
        .height(200)
        .margin({
          left: $r('app.float.image_margin_left'),
          right: $r('app.float.image_margin_right')
        })
    }
    .width(CommonConstants.COLUMN_WIDTH_PERCENT)
    .height(CommonConstants.COLUMN_HEIGHT_PERCENT)
    .backgroundColor($r('app.color.detail_page_background'))
  }

  @Builder Title() {
    Row() {
      Image($r('app.media.ic_back'))
        .width($r('app.float.image_size'))
        .height($r('app.float.image_size'))
        .margin({
          left: $r('app.float.image_margin_left'),
          right: $r('app.float.image_margin_right')
        })
        .onClick(() => {
          router.back();
        })

      Text(this.titleParam)
        .fontColor($r('app.color.title'))
        .fontSize($r('app.float.detail_title'))
    }
    .width(CommonConstants.FULL_WIDTH_PERCENT)
    .height($r('app.float.title_height'))
  }
}