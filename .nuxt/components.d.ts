
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'HeaderBasic': typeof import("../components/HeaderBasic.vue")['default']
    'MapBasic': typeof import("../components/map/MapBasic.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ElAvatar': typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
    'ElAlert': typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
    'ElBadge': typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
    'ElAffix': typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
    'ElAutoResizer': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
    'ElAnchorLink': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
    'ElAside': typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
    'ElAutocomplete': typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
    'ElCalendar': typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
    'ElCascader': typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
    'ElAnchor': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
    'ElBacktop': typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
    'ElButton': typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
    'ElCascaderPanel': typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
    'ElBreadcrumb': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
    'ElButtonGroup': typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
    'ElBreadcrumbItem': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
    'ElCarousel': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
    'ElCheckboxGroup': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
    'ElCarouselItem': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
    'ElCard': typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
    'ElCheckTag': typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
    'ElCol': typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
    'ElColorPicker': typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
    'ElCheckboxButton': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
    'ElConfigProvider': typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
    'ElCollapseItem': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
    'ElCollapse': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
    'ElCountdown': typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
    'ElCollapseTransition': typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
    'ElCheckbox': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
    'ElDescriptionsItem': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
    'ElDropdown': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
    'ElCollectionItem': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
    'ElFooter': typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
    'ElCollection': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
    'ElDatePicker': typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
    'ElDialog': typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
    'ElDivider': typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
    'ElDescriptions': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
    'ElContainer': typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
    'ElDropdownItem': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
    'ElDrawer': typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
    'ElEmpty': typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
    'ElIcon': typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
    'ElImage': typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
    'ElDropdownMenu': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
    'ElFormItem': typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
    'ElInputTag': typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
    'ElInputNumber': typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
    'ElForm': typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
    'ElImageViewer': typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
    'ElMention': typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
    'ElMenuItemGroup': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
    'ElMain': typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
    'ElHeader': typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
    'ElInput': typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
    'ElLink': typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
    'ElOption': typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
    'ElMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
    'ElPopconfirm': typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
    'ElOptionGroup': typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
    'ElPagination': typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
    'ElRadio': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
    'ElMenuItem': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
    'ElPageHeader': typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
    'ElOverlay': typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
    'ElPopover': typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
    'ElPopperArrow': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
    'ElProgress': typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
    'ElPopperContent': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
    'ElRow': typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
    'ElPopperTrigger': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
    'ElSkeleton': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
    'ElPopper': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
    'ElRate': typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
    'ElRadioGroup': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
    'ElSegmented': typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
    'ElSelectV2': typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
    'ElRadioButton': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
    'ElSelect': typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
    'ElScrollbar': typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
    'ElResult': typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
    'ElStatistic': typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
    'ElSkeletonItem': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
    'ElSpace': typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
    'ElSlider': typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
    'ElSubMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
    'ElTable': typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
    'ElSwitch': typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
    'ElTabs': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
    'ElText': typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
    'ElSteps': typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
    'ElTableV2': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
    'ElTabPane': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
    'ElTableColumn': typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
    'ElTimelineItem': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
    'ElTimeSelect': typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
    'ElStep': typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
    'ElTooltip': typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
    'ElTimeline': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
    'ElTag': typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
    'ElTimePicker': typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
    'ElTourStep': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
    'ElTreeSelect': typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
    'ElTransfer': typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
    'ElTour': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
    'ElTreeV2': typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
    'ElTree': typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
    'ElIconArrowDownBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
    'ElIconAddLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
    'ElIconAlarmClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
    'ElUpload': typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
    'ElWatermark': typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
    'ElIconArrowLeftBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
    'ElIconArrowRightBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
    'ElIconArrowDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
    'ElIconAvatar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
    'ElIconAim': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
    'ElIconArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
    'ElIconArrowUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
    'ElIconApple': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
    'ElIconArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
    'ElIconBasketball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
    'ElIconBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
    'ElIconArrowUpBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
    'ElIconBell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
    'ElIconBottomRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
    'ElIconBicycle': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
    'ElIconBaseball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
    'ElIconBack': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
    'ElIconBowl': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
    'ElIconBriefcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
    'ElIconBottomLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
    'ElIconBellFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
    'ElIconCalendar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
    'ElIconBrushFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
    'ElIconBrush': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
    'ElIconCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
    'ElIconCaretRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
    'ElIconBurger': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
    'ElIconCaretBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
    'ElIconBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
    'ElIconCaretLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
    'ElIconCellphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
    'ElIconCaretTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
    'ElIconChatDotSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
    'ElIconChatSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
    'ElIconChatLineRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
    'ElIconCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
    'ElIconChatDotRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
    'ElIconChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
    'ElIconCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
    'ElIconChatRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
    'ElIconChatLineSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
    'ElIconCherry': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
    'ElIconCircleClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
    'ElIconChromeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
    'ElIconChicken': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
    'ElIconCircleCloseFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
    'ElIconCirclePlusFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
    'ElIconCircleCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
    'ElIconCircleCheckFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
    'ElIconClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
    'ElIconCirclePlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
    'ElIconClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
    'ElIconCoffee': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
    'ElIconCloseBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
    'ElIconCoin': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
    'ElIconCollection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
    'ElIconColdDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
    'ElIconCoffeeCup': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
    'ElIconCollectionTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
    'ElIconCompass': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
    'ElIconCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
    'ElIconConnection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
    'ElIconCpu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
    'ElIconCopyDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
    'ElIconCoordinate': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
    'ElIconDArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
    'ElIconComment': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
    'ElIconDArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
    'ElIconCreditCard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
    'ElIconCrop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
    'ElIconDCaret': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
    'ElIconDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
    'ElIconDataAnalysis': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
    'ElIconDataBoard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
    'ElIconDataLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
    'ElIconDessert': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
    'ElIconDeleteFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
    'ElIconDiscount': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
    'ElIconDeleteLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
    'ElIconDish': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
    'ElIconDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
    'ElIconDocumentDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
    'ElIconDocumentAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
    'ElIconDocumentChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
    'ElIconDocumentCopy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
    'ElIconDocumentRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
    'ElIconDishDot': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
    'ElIconEdit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
    'ElIconDownload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
    'ElIconDrizzling': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
    'ElIconElemeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
    'ElIconEleme': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
    'ElIconExpand': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
    'ElIconElementPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
    'ElIconFinished': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
    'ElIconFlag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
    'ElIconEditPen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
    'ElIconFemale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
    'ElIconFilm': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
    'ElIconFilter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
    'ElIconFirstAidKit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
    'ElIconFailed': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
    'ElIconFolderDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
    'ElIconFiles': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
    'ElIconFold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
    'ElIconFolder': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
    'ElIconFolderOpened': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
    'ElIconFolderChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
    'ElIconFolderAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
    'ElIconFolderRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
    'ElIconFootball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
    'ElIconForkSpoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
    'ElIconFood': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
    'ElIconGoblet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
    'ElIconGoods': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
    'ElIconFries': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
    'ElIconGoldMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
    'ElIconGobletFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
    'ElIconGobletSquareFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
    'ElIconGobletSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
    'ElIconGrape': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
    'ElIconFullScreen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
    'ElIconGoodsFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
    'ElIconHeadset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
    'ElIconHelpFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
    'ElIconGuide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
    'ElIconHelp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
    'ElIconHandbag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
    'ElIconHide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
    'ElIconGrid': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
    'ElIconIceCream': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
    'ElIconHouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
    'ElIconIphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
    'ElIconHistogram': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
    'ElIconIceCreamSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
    'ElIconIceCreamRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
    'ElIconHotWater': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
    'ElIconIceDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
    'ElIconInfoFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
    'ElIconKey': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
    'ElIconHomeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
    'ElIconKnifeFork': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
    'ElIconList': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
    'ElIconIceTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
    'ElIconLoading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
    'ElIconLightning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
    'ElIconLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
    'ElIconLock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
    'ElIconLocationInformation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
    'ElIconMagnet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
    'ElIconLocationFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
    'ElIconMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
    'ElIconMale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
    'ElIconLink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
    'ElIconMemo': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
    'ElIconLollipop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
    'ElIconMapLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
    'ElIconMagicStick': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
    'ElIconMessageBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
    'ElIconManagement': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
    'ElIconMenu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
    'ElIconMic': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
    'ElIconMessage': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
    'ElIconMoonNight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
    'ElIconMicrophone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
    'ElIconMoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
    'ElIconMoney': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
    'ElIconMinus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
    'ElIconMilkTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
    'ElIconMute': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
    'ElIconMonitor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
    'ElIconMug': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
    'ElIconMostlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
    'ElIconMoreFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
    'ElIconOfficeBuilding': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
    'ElIconNotebook': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
    'ElIconMore': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
    'ElIconMuteNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
    'ElIconMouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
    'ElIconNoSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
    'ElIconOdometer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
    'ElIconNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
    'ElIconOperation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
    'ElIconOpen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
    'ElIconOrange': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
    'ElIconPaperclip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
    'ElIconPear': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
    'ElIconPhone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
    'ElIconOpportunity': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
    'ElIconPartlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
    'ElIconPieChart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
    'ElIconPhoneFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
    'ElIconPlatform': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
    'ElIconPictureFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
    'ElIconPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
    'ElIconPresent': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
    'ElIconPictureRounded': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
    'ElIconPriceTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
    'ElIconPointer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
    'ElIconPlace': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
    'ElIconPicture': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
    'ElIconPouring': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
    'ElIconQuartzWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
    'ElIconPromotion': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
    'ElIconPosition': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
    'ElIconPostcard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
    'ElIconRefresh': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
    'ElIconPrinter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
    'ElIconQuestionFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
    'ElIconReading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
    'ElIconRefreshLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
    'ElIconRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
    'ElIconReadingLamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
    'ElIconRefreshRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
    'ElIconRemoveFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
    'ElIconRank': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
    'ElIconScissor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
    'ElIconRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
    'ElIconSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
    'ElIconSchool': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
    'ElIconSell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
    'ElIconSearch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
    'ElIconRefrigerator': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
    'ElIconSemiSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
    'ElIconScaleToOriginal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
    'ElIconSetting': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
    'ElIconService': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
    'ElIconSetUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
    'ElIconShare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
    'ElIconShoppingTrolley': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
    'ElIconShip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
    'ElIconSoldOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
    'ElIconShop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
    'ElIconShoppingCart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
    'ElIconShoppingBag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
    'ElIconSoccer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
    'ElIconSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
    'ElIconSort': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
    'ElIconShoppingCartFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
    'ElIconStarFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
    'ElIconSortUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
    'ElIconSortDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
    'ElIconSuccessFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
    'ElIconStopwatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
    'ElIconStar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
    'ElIconSuitcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
    'ElIconSunny': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
    'ElIconStamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
    'ElIconSwitch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
    'ElIconSunrise': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
    'ElIconTakeawayBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
    'ElIconSugar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
    'ElIconSwitchFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
    'ElIconSunset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
    'ElIconSuitcaseLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
    'ElIconTickets': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
    'ElIconTimer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
    'ElIconSwitchButton': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
    'ElIconTicket': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
    'ElIconTopLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
    'ElIconTools': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
    'ElIconToiletPaper': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
    'ElIconTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
    'ElIconTrendCharts': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
    'ElIconTopRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
    'ElIconUmbrella': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
    'ElIconTurnOff': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
    'ElIconTrophy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
    'ElIconUploadFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
    'ElIconUpload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
    'ElIconTrophyBase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
    'ElIconUser': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
    'ElIconUnlock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
    'ElIconUserFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
    'ElIconVan': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
    'ElIconView': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
    'ElIconVideoCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
    'ElIconVideoCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
    'ElIconVideoPlay': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
    'ElIconWarnTriangleFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
    'ElIconWallet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
    'ElIconWalletFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
    'ElIconVideoPause': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
    'ElIconWatermelon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
    'ElIconZoomIn': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
    'ElIconWindPower': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
    'ElIconWarning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
    'ElIconZoomOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
    'ElIconWarningFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
    'ElIconWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyHeaderBasic': LazyComponent<typeof import("../components/HeaderBasic.vue")['default']>
    'LazyMapBasic': LazyComponent<typeof import("../components/map/MapBasic.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyElAvatar': LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
    'LazyElAlert': LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
    'LazyElBadge': LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
    'LazyElAffix': LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
    'LazyElAutoResizer': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
    'LazyElAnchorLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
    'LazyElAside': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
    'LazyElAutocomplete': LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
    'LazyElCalendar': LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
    'LazyElCascader': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
    'LazyElAnchor': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
    'LazyElBacktop': LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
    'LazyElButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
    'LazyElCascaderPanel': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
    'LazyElBreadcrumb': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
    'LazyElButtonGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
    'LazyElBreadcrumbItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
    'LazyElCarousel': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
    'LazyElCheckboxGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
    'LazyElCarouselItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
    'LazyElCard': LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
    'LazyElCheckTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
    'LazyElCol': LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
    'LazyElColorPicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
    'LazyElCheckboxButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
    'LazyElConfigProvider': LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
    'LazyElCollapseItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
    'LazyElCollapse': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
    'LazyElCountdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
    'LazyElCollapseTransition': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
    'LazyElCheckbox': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
    'LazyElDescriptionsItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
    'LazyElDropdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
    'LazyElCollectionItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
    'LazyElFooter': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
    'LazyElCollection': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
    'LazyElDatePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
    'LazyElDialog': LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
    'LazyElDivider': LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
    'LazyElDescriptions': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
    'LazyElContainer': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
    'LazyElDropdownItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
    'LazyElDrawer': LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
    'LazyElEmpty': LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
    'LazyElIcon': LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
    'LazyElImage': LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
    'LazyElDropdownMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
    'LazyElFormItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
    'LazyElInputTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
    'LazyElInputNumber': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
    'LazyElForm': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
    'LazyElImageViewer': LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
    'LazyElMention': LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
    'LazyElMenuItemGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
    'LazyElMain': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
    'LazyElHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
    'LazyElInput': LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
    'LazyElLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
    'LazyElOption': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
    'LazyElMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
    'LazyElPopconfirm': LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
    'LazyElOptionGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
    'LazyElPagination': LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
    'LazyElRadio': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
    'LazyElMenuItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
    'LazyElPageHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
    'LazyElOverlay': LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
    'LazyElPopover': LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
    'LazyElPopperArrow': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
    'LazyElProgress': LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
    'LazyElPopperContent': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
    'LazyElRow': LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
    'LazyElPopperTrigger': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
    'LazyElSkeleton': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
    'LazyElPopper': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
    'LazyElRate': LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
    'LazyElRadioGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
    'LazyElSegmented': LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
    'LazyElSelectV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
    'LazyElRadioButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
    'LazyElSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
    'LazyElScrollbar': LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
    'LazyElResult': LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
    'LazyElStatistic': LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
    'LazyElSkeletonItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
    'LazyElSpace': LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
    'LazyElSlider': LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
    'LazyElSubMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
    'LazyElTable': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
    'LazyElSwitch': LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
    'LazyElTabs': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
    'LazyElText': LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
    'LazyElSteps': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
    'LazyElTableV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
    'LazyElTabPane': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
    'LazyElTableColumn': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
    'LazyElTimelineItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
    'LazyElTimeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
    'LazyElStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
    'LazyElTooltip': LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
    'LazyElTimeline': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
    'LazyElTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
    'LazyElTimePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
    'LazyElTourStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
    'LazyElTreeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
    'LazyElTransfer': LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
    'LazyElTour': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
    'LazyElTreeV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
    'LazyElTree': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
    'LazyElIconArrowDownBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
    'LazyElIconAddLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
    'LazyElIconAlarmClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
    'LazyElUpload': LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
    'LazyElWatermark': LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
    'LazyElIconArrowLeftBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
    'LazyElIconArrowRightBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
    'LazyElIconArrowDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
    'LazyElIconAvatar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
    'LazyElIconAim': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
    'LazyElIconArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
    'LazyElIconArrowUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
    'LazyElIconApple': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
    'LazyElIconArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
    'LazyElIconBasketball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
    'LazyElIconBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
    'LazyElIconArrowUpBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
    'LazyElIconBell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
    'LazyElIconBottomRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
    'LazyElIconBicycle': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
    'LazyElIconBaseball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
    'LazyElIconBack': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
    'LazyElIconBowl': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
    'LazyElIconBriefcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
    'LazyElIconBottomLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
    'LazyElIconBellFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
    'LazyElIconCalendar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
    'LazyElIconBrushFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
    'LazyElIconBrush': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
    'LazyElIconCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
    'LazyElIconCaretRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
    'LazyElIconBurger': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
    'LazyElIconCaretBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
    'LazyElIconBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
    'LazyElIconCaretLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
    'LazyElIconCellphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
    'LazyElIconCaretTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
    'LazyElIconChatDotSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
    'LazyElIconChatSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
    'LazyElIconChatLineRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
    'LazyElIconCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
    'LazyElIconChatDotRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
    'LazyElIconChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
    'LazyElIconCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
    'LazyElIconChatRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
    'LazyElIconChatLineSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
    'LazyElIconCherry': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
    'LazyElIconCircleClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
    'LazyElIconChromeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
    'LazyElIconChicken': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
    'LazyElIconCircleCloseFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
    'LazyElIconCirclePlusFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
    'LazyElIconCircleCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
    'LazyElIconCircleCheckFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
    'LazyElIconClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
    'LazyElIconCirclePlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
    'LazyElIconClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
    'LazyElIconCoffee': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
    'LazyElIconCloseBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
    'LazyElIconCoin': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
    'LazyElIconCollection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
    'LazyElIconColdDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
    'LazyElIconCoffeeCup': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
    'LazyElIconCollectionTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
    'LazyElIconCompass': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
    'LazyElIconCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
    'LazyElIconConnection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
    'LazyElIconCpu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
    'LazyElIconCopyDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
    'LazyElIconCoordinate': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
    'LazyElIconDArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
    'LazyElIconComment': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
    'LazyElIconDArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
    'LazyElIconCreditCard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
    'LazyElIconCrop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
    'LazyElIconDCaret': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
    'LazyElIconDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
    'LazyElIconDataAnalysis': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
    'LazyElIconDataBoard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
    'LazyElIconDataLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
    'LazyElIconDessert': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
    'LazyElIconDeleteFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
    'LazyElIconDiscount': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
    'LazyElIconDeleteLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
    'LazyElIconDish': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
    'LazyElIconDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
    'LazyElIconDocumentDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
    'LazyElIconDocumentAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
    'LazyElIconDocumentChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
    'LazyElIconDocumentCopy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
    'LazyElIconDocumentRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
    'LazyElIconDishDot': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
    'LazyElIconEdit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
    'LazyElIconDownload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
    'LazyElIconDrizzling': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
    'LazyElIconElemeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
    'LazyElIconEleme': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
    'LazyElIconExpand': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
    'LazyElIconElementPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
    'LazyElIconFinished': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
    'LazyElIconFlag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
    'LazyElIconEditPen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
    'LazyElIconFemale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
    'LazyElIconFilm': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
    'LazyElIconFilter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
    'LazyElIconFirstAidKit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
    'LazyElIconFailed': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
    'LazyElIconFolderDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
    'LazyElIconFiles': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
    'LazyElIconFold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
    'LazyElIconFolder': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
    'LazyElIconFolderOpened': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
    'LazyElIconFolderChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
    'LazyElIconFolderAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
    'LazyElIconFolderRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
    'LazyElIconFootball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
    'LazyElIconForkSpoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
    'LazyElIconFood': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
    'LazyElIconGoblet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
    'LazyElIconGoods': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
    'LazyElIconFries': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
    'LazyElIconGoldMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
    'LazyElIconGobletFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
    'LazyElIconGobletSquareFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
    'LazyElIconGobletSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
    'LazyElIconGrape': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
    'LazyElIconFullScreen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
    'LazyElIconGoodsFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
    'LazyElIconHeadset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
    'LazyElIconHelpFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
    'LazyElIconGuide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
    'LazyElIconHelp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
    'LazyElIconHandbag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
    'LazyElIconHide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
    'LazyElIconGrid': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
    'LazyElIconIceCream': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
    'LazyElIconHouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
    'LazyElIconIphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
    'LazyElIconHistogram': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
    'LazyElIconIceCreamSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
    'LazyElIconIceCreamRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
    'LazyElIconHotWater': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
    'LazyElIconIceDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
    'LazyElIconInfoFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
    'LazyElIconKey': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
    'LazyElIconHomeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
    'LazyElIconKnifeFork': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
    'LazyElIconList': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
    'LazyElIconIceTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
    'LazyElIconLoading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
    'LazyElIconLightning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
    'LazyElIconLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
    'LazyElIconLock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
    'LazyElIconLocationInformation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
    'LazyElIconMagnet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
    'LazyElIconLocationFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
    'LazyElIconMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
    'LazyElIconMale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
    'LazyElIconLink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
    'LazyElIconMemo': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
    'LazyElIconLollipop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
    'LazyElIconMapLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
    'LazyElIconMagicStick': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
    'LazyElIconMessageBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
    'LazyElIconManagement': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
    'LazyElIconMenu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
    'LazyElIconMic': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
    'LazyElIconMessage': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
    'LazyElIconMoonNight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
    'LazyElIconMicrophone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
    'LazyElIconMoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
    'LazyElIconMoney': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
    'LazyElIconMinus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
    'LazyElIconMilkTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
    'LazyElIconMute': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
    'LazyElIconMonitor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
    'LazyElIconMug': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
    'LazyElIconMostlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
    'LazyElIconMoreFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
    'LazyElIconOfficeBuilding': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
    'LazyElIconNotebook': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
    'LazyElIconMore': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
    'LazyElIconMuteNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
    'LazyElIconMouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
    'LazyElIconNoSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
    'LazyElIconOdometer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
    'LazyElIconNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
    'LazyElIconOperation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
    'LazyElIconOpen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
    'LazyElIconOrange': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
    'LazyElIconPaperclip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
    'LazyElIconPear': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
    'LazyElIconPhone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
    'LazyElIconOpportunity': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
    'LazyElIconPartlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
    'LazyElIconPieChart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
    'LazyElIconPhoneFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
    'LazyElIconPlatform': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
    'LazyElIconPictureFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
    'LazyElIconPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
    'LazyElIconPresent': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
    'LazyElIconPictureRounded': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
    'LazyElIconPriceTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
    'LazyElIconPointer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
    'LazyElIconPlace': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
    'LazyElIconPicture': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
    'LazyElIconPouring': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
    'LazyElIconQuartzWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
    'LazyElIconPromotion': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
    'LazyElIconPosition': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
    'LazyElIconPostcard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
    'LazyElIconRefresh': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
    'LazyElIconPrinter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
    'LazyElIconQuestionFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
    'LazyElIconReading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
    'LazyElIconRefreshLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
    'LazyElIconRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
    'LazyElIconReadingLamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
    'LazyElIconRefreshRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
    'LazyElIconRemoveFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
    'LazyElIconRank': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
    'LazyElIconScissor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
    'LazyElIconRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
    'LazyElIconSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
    'LazyElIconSchool': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
    'LazyElIconSell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
    'LazyElIconSearch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
    'LazyElIconRefrigerator': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
    'LazyElIconSemiSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
    'LazyElIconScaleToOriginal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
    'LazyElIconSetting': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
    'LazyElIconService': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
    'LazyElIconSetUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
    'LazyElIconShare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
    'LazyElIconShoppingTrolley': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
    'LazyElIconShip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
    'LazyElIconSoldOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
    'LazyElIconShop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
    'LazyElIconShoppingCart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
    'LazyElIconShoppingBag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
    'LazyElIconSoccer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
    'LazyElIconSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
    'LazyElIconSort': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
    'LazyElIconShoppingCartFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
    'LazyElIconStarFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
    'LazyElIconSortUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
    'LazyElIconSortDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
    'LazyElIconSuccessFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
    'LazyElIconStopwatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
    'LazyElIconStar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
    'LazyElIconSuitcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
    'LazyElIconSunny': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
    'LazyElIconStamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
    'LazyElIconSwitch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
    'LazyElIconSunrise': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
    'LazyElIconTakeawayBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
    'LazyElIconSugar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
    'LazyElIconSwitchFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
    'LazyElIconSunset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
    'LazyElIconSuitcaseLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
    'LazyElIconTickets': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
    'LazyElIconTimer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
    'LazyElIconSwitchButton': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
    'LazyElIconTicket': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
    'LazyElIconTopLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
    'LazyElIconTools': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
    'LazyElIconToiletPaper': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
    'LazyElIconTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
    'LazyElIconTrendCharts': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
    'LazyElIconTopRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
    'LazyElIconUmbrella': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
    'LazyElIconTurnOff': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
    'LazyElIconTrophy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
    'LazyElIconUploadFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
    'LazyElIconUpload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
    'LazyElIconTrophyBase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
    'LazyElIconUser': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
    'LazyElIconUnlock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
    'LazyElIconUserFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
    'LazyElIconVan': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
    'LazyElIconView': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
    'LazyElIconVideoCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
    'LazyElIconVideoCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
    'LazyElIconVideoPlay': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
    'LazyElIconWarnTriangleFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
    'LazyElIconWallet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
    'LazyElIconWalletFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
    'LazyElIconVideoPause': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
    'LazyElIconWatermelon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
    'LazyElIconZoomIn': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
    'LazyElIconWindPower': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
    'LazyElIconWarning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
    'LazyElIconZoomOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
    'LazyElIconWarningFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
    'LazyElIconWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const HeaderBasic: typeof import("../components/HeaderBasic.vue")['default']
export const MapBasic: typeof import("../components/map/MapBasic.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ElAvatar: typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
export const ElAlert: typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
export const ElBadge: typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
export const ElAffix: typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
export const ElAutoResizer: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
export const ElAnchorLink: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
export const ElAside: typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
export const ElAutocomplete: typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
export const ElCalendar: typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
export const ElCascader: typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
export const ElAnchor: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
export const ElBacktop: typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
export const ElButton: typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
export const ElCascaderPanel: typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
export const ElBreadcrumb: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
export const ElButtonGroup: typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
export const ElBreadcrumbItem: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
export const ElCarousel: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
export const ElCheckboxGroup: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
export const ElCarouselItem: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
export const ElCard: typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
export const ElCheckTag: typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
export const ElCol: typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
export const ElColorPicker: typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
export const ElCheckboxButton: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
export const ElConfigProvider: typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
export const ElCollapseItem: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
export const ElCollapse: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
export const ElCountdown: typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
export const ElCollapseTransition: typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
export const ElCheckbox: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
export const ElDescriptionsItem: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
export const ElDropdown: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
export const ElCollectionItem: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
export const ElFooter: typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
export const ElCollection: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
export const ElDatePicker: typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
export const ElDialog: typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
export const ElDivider: typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
export const ElDescriptions: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
export const ElContainer: typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
export const ElDropdownItem: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
export const ElDrawer: typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
export const ElEmpty: typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
export const ElIcon: typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
export const ElImage: typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
export const ElDropdownMenu: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
export const ElFormItem: typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
export const ElInputTag: typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
export const ElInputNumber: typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
export const ElForm: typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
export const ElImageViewer: typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
export const ElMention: typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
export const ElMenuItemGroup: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
export const ElMain: typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
export const ElHeader: typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
export const ElInput: typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
export const ElLink: typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
export const ElOption: typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
export const ElMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
export const ElPopconfirm: typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
export const ElOptionGroup: typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
export const ElPagination: typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
export const ElRadio: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
export const ElMenuItem: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
export const ElPageHeader: typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
export const ElOverlay: typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
export const ElPopover: typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
export const ElPopperArrow: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
export const ElProgress: typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
export const ElPopperContent: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
export const ElRow: typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
export const ElPopperTrigger: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
export const ElSkeleton: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
export const ElPopper: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
export const ElRate: typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
export const ElRadioGroup: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
export const ElSegmented: typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
export const ElSelectV2: typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
export const ElRadioButton: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
export const ElSelect: typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
export const ElScrollbar: typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
export const ElResult: typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
export const ElStatistic: typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
export const ElSkeletonItem: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
export const ElSpace: typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
export const ElSlider: typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
export const ElSubMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
export const ElTable: typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
export const ElSwitch: typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
export const ElTabs: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
export const ElText: typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
export const ElSteps: typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
export const ElTableV2: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
export const ElTabPane: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
export const ElTableColumn: typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
export const ElTimelineItem: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
export const ElTimeSelect: typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
export const ElStep: typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
export const ElTooltip: typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
export const ElTimeline: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
export const ElTag: typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
export const ElTimePicker: typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
export const ElTourStep: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
export const ElTreeSelect: typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
export const ElTransfer: typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
export const ElTour: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
export const ElTreeV2: typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
export const ElTree: typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
export const ElIconArrowDownBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
export const ElIconAddLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
export const ElIconAlarmClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
export const ElUpload: typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
export const ElWatermark: typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
export const ElIconArrowLeftBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
export const ElIconArrowRightBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
export const ElIconArrowDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
export const ElIconAvatar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
export const ElIconAim: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
export const ElIconArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
export const ElIconArrowUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
export const ElIconApple: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
export const ElIconArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
export const ElIconBasketball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
export const ElIconBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
export const ElIconArrowUpBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
export const ElIconBell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
export const ElIconBottomRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
export const ElIconBicycle: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
export const ElIconBaseball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
export const ElIconBack: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
export const ElIconBowl: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
export const ElIconBriefcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
export const ElIconBottomLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
export const ElIconBellFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
export const ElIconCalendar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
export const ElIconBrushFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
export const ElIconBrush: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
export const ElIconCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
export const ElIconCaretRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
export const ElIconBurger: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
export const ElIconCaretBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
export const ElIconBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
export const ElIconCaretLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
export const ElIconCellphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
export const ElIconCaretTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
export const ElIconChatDotSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
export const ElIconChatSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
export const ElIconChatLineRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
export const ElIconCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
export const ElIconChatDotRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
export const ElIconChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
export const ElIconCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
export const ElIconChatRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
export const ElIconChatLineSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
export const ElIconCherry: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
export const ElIconCircleClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
export const ElIconChromeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
export const ElIconChicken: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
export const ElIconCircleCloseFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
export const ElIconCirclePlusFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
export const ElIconCircleCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
export const ElIconCircleCheckFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
export const ElIconClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
export const ElIconCirclePlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
export const ElIconClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
export const ElIconCoffee: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
export const ElIconCloseBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
export const ElIconCoin: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
export const ElIconCollection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
export const ElIconColdDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
export const ElIconCoffeeCup: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
export const ElIconCollectionTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
export const ElIconCompass: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
export const ElIconCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
export const ElIconConnection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
export const ElIconCpu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
export const ElIconCopyDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
export const ElIconCoordinate: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
export const ElIconDArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
export const ElIconComment: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
export const ElIconDArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
export const ElIconCreditCard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
export const ElIconCrop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
export const ElIconDCaret: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
export const ElIconDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
export const ElIconDataAnalysis: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
export const ElIconDataBoard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
export const ElIconDataLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
export const ElIconDessert: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
export const ElIconDeleteFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
export const ElIconDiscount: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
export const ElIconDeleteLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
export const ElIconDish: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
export const ElIconDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
export const ElIconDocumentDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
export const ElIconDocumentAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
export const ElIconDocumentChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
export const ElIconDocumentCopy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
export const ElIconDocumentRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
export const ElIconDishDot: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
export const ElIconEdit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
export const ElIconDownload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
export const ElIconDrizzling: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
export const ElIconElemeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
export const ElIconEleme: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
export const ElIconExpand: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
export const ElIconElementPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
export const ElIconFinished: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
export const ElIconFlag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
export const ElIconEditPen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
export const ElIconFemale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
export const ElIconFilm: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
export const ElIconFilter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
export const ElIconFirstAidKit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
export const ElIconFailed: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
export const ElIconFolderDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
export const ElIconFiles: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
export const ElIconFold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
export const ElIconFolder: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
export const ElIconFolderOpened: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
export const ElIconFolderChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
export const ElIconFolderAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
export const ElIconFolderRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
export const ElIconFootball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
export const ElIconForkSpoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
export const ElIconFood: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
export const ElIconGoblet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
export const ElIconGoods: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
export const ElIconFries: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
export const ElIconGoldMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
export const ElIconGobletFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
export const ElIconGobletSquareFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
export const ElIconGobletSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
export const ElIconGrape: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
export const ElIconFullScreen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
export const ElIconGoodsFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
export const ElIconHeadset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
export const ElIconHelpFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
export const ElIconGuide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
export const ElIconHelp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
export const ElIconHandbag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
export const ElIconHide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
export const ElIconGrid: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
export const ElIconIceCream: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
export const ElIconHouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
export const ElIconIphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
export const ElIconHistogram: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
export const ElIconIceCreamSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
export const ElIconIceCreamRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
export const ElIconHotWater: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
export const ElIconIceDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
export const ElIconInfoFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
export const ElIconKey: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
export const ElIconHomeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
export const ElIconKnifeFork: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
export const ElIconList: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
export const ElIconIceTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
export const ElIconLoading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
export const ElIconLightning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
export const ElIconLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
export const ElIconLock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
export const ElIconLocationInformation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
export const ElIconMagnet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
export const ElIconLocationFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
export const ElIconMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
export const ElIconMale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
export const ElIconLink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
export const ElIconMemo: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
export const ElIconLollipop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
export const ElIconMapLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
export const ElIconMagicStick: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
export const ElIconMessageBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
export const ElIconManagement: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
export const ElIconMenu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
export const ElIconMic: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
export const ElIconMessage: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
export const ElIconMoonNight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
export const ElIconMicrophone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
export const ElIconMoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
export const ElIconMoney: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
export const ElIconMinus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
export const ElIconMilkTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
export const ElIconMute: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
export const ElIconMonitor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
export const ElIconMug: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
export const ElIconMostlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
export const ElIconMoreFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
export const ElIconOfficeBuilding: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
export const ElIconNotebook: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
export const ElIconMore: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
export const ElIconMuteNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
export const ElIconMouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
export const ElIconNoSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
export const ElIconOdometer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
export const ElIconNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
export const ElIconOperation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
export const ElIconOpen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
export const ElIconOrange: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
export const ElIconPaperclip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
export const ElIconPear: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
export const ElIconPhone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
export const ElIconOpportunity: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
export const ElIconPartlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
export const ElIconPieChart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
export const ElIconPhoneFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
export const ElIconPlatform: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
export const ElIconPictureFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
export const ElIconPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
export const ElIconPresent: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
export const ElIconPictureRounded: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
export const ElIconPriceTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
export const ElIconPointer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
export const ElIconPlace: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
export const ElIconPicture: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
export const ElIconPouring: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
export const ElIconQuartzWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
export const ElIconPromotion: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
export const ElIconPosition: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
export const ElIconPostcard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
export const ElIconRefresh: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
export const ElIconPrinter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
export const ElIconQuestionFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
export const ElIconReading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
export const ElIconRefreshLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
export const ElIconRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
export const ElIconReadingLamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
export const ElIconRefreshRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
export const ElIconRemoveFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
export const ElIconRank: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
export const ElIconScissor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
export const ElIconRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
export const ElIconSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
export const ElIconSchool: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
export const ElIconSell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
export const ElIconSearch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
export const ElIconRefrigerator: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
export const ElIconSemiSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
export const ElIconScaleToOriginal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
export const ElIconSetting: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
export const ElIconService: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
export const ElIconSetUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
export const ElIconShare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
export const ElIconShoppingTrolley: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
export const ElIconShip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
export const ElIconSoldOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
export const ElIconShop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
export const ElIconShoppingCart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
export const ElIconShoppingBag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
export const ElIconSoccer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
export const ElIconSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
export const ElIconSort: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
export const ElIconShoppingCartFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
export const ElIconStarFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
export const ElIconSortUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
export const ElIconSortDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
export const ElIconSuccessFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
export const ElIconStopwatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
export const ElIconStar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
export const ElIconSuitcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
export const ElIconSunny: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
export const ElIconStamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
export const ElIconSwitch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
export const ElIconSunrise: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
export const ElIconTakeawayBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
export const ElIconSugar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
export const ElIconSwitchFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
export const ElIconSunset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
export const ElIconSuitcaseLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
export const ElIconTickets: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
export const ElIconTimer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
export const ElIconSwitchButton: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
export const ElIconTicket: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
export const ElIconTopLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
export const ElIconTools: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
export const ElIconToiletPaper: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
export const ElIconTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
export const ElIconTrendCharts: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
export const ElIconTopRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
export const ElIconUmbrella: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
export const ElIconTurnOff: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
export const ElIconTrophy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
export const ElIconUploadFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
export const ElIconUpload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
export const ElIconTrophyBase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
export const ElIconUser: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
export const ElIconUnlock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
export const ElIconUserFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
export const ElIconVan: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
export const ElIconView: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
export const ElIconVideoCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
export const ElIconVideoCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
export const ElIconVideoPlay: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
export const ElIconWarnTriangleFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
export const ElIconWallet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
export const ElIconWalletFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
export const ElIconVideoPause: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
export const ElIconWatermelon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
export const ElIconZoomIn: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
export const ElIconWindPower: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
export const ElIconWarning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
export const ElIconZoomOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
export const ElIconWarningFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
export const ElIconWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyHeaderBasic: LazyComponent<typeof import("../components/HeaderBasic.vue")['default']>
export const LazyMapBasic: LazyComponent<typeof import("../components/map/MapBasic.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyElAvatar: LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
export const LazyElAlert: LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
export const LazyElBadge: LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
export const LazyElAffix: LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
export const LazyElAutoResizer: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
export const LazyElAnchorLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
export const LazyElAside: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
export const LazyElAutocomplete: LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
export const LazyElCalendar: LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
export const LazyElCascader: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
export const LazyElAnchor: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
export const LazyElBacktop: LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
export const LazyElButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
export const LazyElCascaderPanel: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
export const LazyElBreadcrumb: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
export const LazyElButtonGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
export const LazyElBreadcrumbItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
export const LazyElCarousel: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
export const LazyElCheckboxGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
export const LazyElCarouselItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
export const LazyElCard: LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
export const LazyElCheckTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
export const LazyElCol: LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
export const LazyElColorPicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
export const LazyElCheckboxButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
export const LazyElConfigProvider: LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
export const LazyElCollapseItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
export const LazyElCollapse: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
export const LazyElCountdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
export const LazyElCollapseTransition: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
export const LazyElCheckbox: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
export const LazyElDescriptionsItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
export const LazyElDropdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
export const LazyElCollectionItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
export const LazyElFooter: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
export const LazyElCollection: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
export const LazyElDatePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
export const LazyElDialog: LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
export const LazyElDivider: LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
export const LazyElDescriptions: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
export const LazyElContainer: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
export const LazyElDropdownItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
export const LazyElDrawer: LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
export const LazyElEmpty: LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
export const LazyElIcon: LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
export const LazyElImage: LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
export const LazyElDropdownMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
export const LazyElFormItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
export const LazyElInputTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
export const LazyElInputNumber: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
export const LazyElForm: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
export const LazyElImageViewer: LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
export const LazyElMention: LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
export const LazyElMenuItemGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
export const LazyElMain: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
export const LazyElHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
export const LazyElInput: LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
export const LazyElLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
export const LazyElOption: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
export const LazyElMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
export const LazyElPopconfirm: LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
export const LazyElOptionGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
export const LazyElPagination: LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
export const LazyElRadio: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
export const LazyElMenuItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
export const LazyElPageHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
export const LazyElOverlay: LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
export const LazyElPopover: LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
export const LazyElPopperArrow: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
export const LazyElProgress: LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
export const LazyElPopperContent: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
export const LazyElRow: LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
export const LazyElPopperTrigger: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
export const LazyElSkeleton: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
export const LazyElPopper: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
export const LazyElRate: LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
export const LazyElRadioGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
export const LazyElSegmented: LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
export const LazyElSelectV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
export const LazyElRadioButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
export const LazyElSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
export const LazyElScrollbar: LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
export const LazyElResult: LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
export const LazyElStatistic: LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
export const LazyElSkeletonItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
export const LazyElSpace: LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
export const LazyElSlider: LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
export const LazyElSubMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
export const LazyElTable: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
export const LazyElSwitch: LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
export const LazyElTabs: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
export const LazyElText: LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
export const LazyElSteps: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
export const LazyElTableV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
export const LazyElTabPane: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
export const LazyElTableColumn: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
export const LazyElTimelineItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
export const LazyElTimeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
export const LazyElStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
export const LazyElTooltip: LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
export const LazyElTimeline: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
export const LazyElTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
export const LazyElTimePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
export const LazyElTourStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
export const LazyElTreeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
export const LazyElTransfer: LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
export const LazyElTour: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
export const LazyElTreeV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
export const LazyElTree: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
export const LazyElIconArrowDownBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
export const LazyElIconAddLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
export const LazyElIconAlarmClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
export const LazyElUpload: LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
export const LazyElWatermark: LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
export const LazyElIconArrowLeftBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
export const LazyElIconArrowRightBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
export const LazyElIconArrowDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
export const LazyElIconAvatar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
export const LazyElIconAim: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
export const LazyElIconArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
export const LazyElIconArrowUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
export const LazyElIconApple: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
export const LazyElIconArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
export const LazyElIconBasketball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
export const LazyElIconBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
export const LazyElIconArrowUpBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
export const LazyElIconBell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
export const LazyElIconBottomRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
export const LazyElIconBicycle: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
export const LazyElIconBaseball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
export const LazyElIconBack: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
export const LazyElIconBowl: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
export const LazyElIconBriefcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
export const LazyElIconBottomLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
export const LazyElIconBellFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
export const LazyElIconCalendar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
export const LazyElIconBrushFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
export const LazyElIconBrush: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
export const LazyElIconCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
export const LazyElIconCaretRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
export const LazyElIconBurger: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
export const LazyElIconCaretBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
export const LazyElIconBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
export const LazyElIconCaretLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
export const LazyElIconCellphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
export const LazyElIconCaretTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
export const LazyElIconChatDotSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
export const LazyElIconChatSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
export const LazyElIconChatLineRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
export const LazyElIconCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
export const LazyElIconChatDotRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
export const LazyElIconChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
export const LazyElIconCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
export const LazyElIconChatRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
export const LazyElIconChatLineSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
export const LazyElIconCherry: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
export const LazyElIconCircleClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
export const LazyElIconChromeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
export const LazyElIconChicken: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
export const LazyElIconCircleCloseFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
export const LazyElIconCirclePlusFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
export const LazyElIconCircleCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
export const LazyElIconCircleCheckFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
export const LazyElIconClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
export const LazyElIconCirclePlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
export const LazyElIconClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
export const LazyElIconCoffee: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
export const LazyElIconCloseBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
export const LazyElIconCoin: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
export const LazyElIconCollection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
export const LazyElIconColdDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
export const LazyElIconCoffeeCup: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
export const LazyElIconCollectionTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
export const LazyElIconCompass: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
export const LazyElIconCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
export const LazyElIconConnection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
export const LazyElIconCpu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
export const LazyElIconCopyDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
export const LazyElIconCoordinate: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
export const LazyElIconDArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
export const LazyElIconComment: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
export const LazyElIconDArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
export const LazyElIconCreditCard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
export const LazyElIconCrop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
export const LazyElIconDCaret: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
export const LazyElIconDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
export const LazyElIconDataAnalysis: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
export const LazyElIconDataBoard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
export const LazyElIconDataLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
export const LazyElIconDessert: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
export const LazyElIconDeleteFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
export const LazyElIconDiscount: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
export const LazyElIconDeleteLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
export const LazyElIconDish: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
export const LazyElIconDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
export const LazyElIconDocumentDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
export const LazyElIconDocumentAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
export const LazyElIconDocumentChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
export const LazyElIconDocumentCopy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
export const LazyElIconDocumentRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
export const LazyElIconDishDot: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
export const LazyElIconEdit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
export const LazyElIconDownload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
export const LazyElIconDrizzling: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
export const LazyElIconElemeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
export const LazyElIconEleme: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
export const LazyElIconExpand: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
export const LazyElIconElementPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
export const LazyElIconFinished: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
export const LazyElIconFlag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
export const LazyElIconEditPen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
export const LazyElIconFemale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
export const LazyElIconFilm: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
export const LazyElIconFilter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
export const LazyElIconFirstAidKit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
export const LazyElIconFailed: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
export const LazyElIconFolderDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
export const LazyElIconFiles: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
export const LazyElIconFold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
export const LazyElIconFolder: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
export const LazyElIconFolderOpened: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
export const LazyElIconFolderChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
export const LazyElIconFolderAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
export const LazyElIconFolderRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
export const LazyElIconFootball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
export const LazyElIconForkSpoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
export const LazyElIconFood: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
export const LazyElIconGoblet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
export const LazyElIconGoods: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
export const LazyElIconFries: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
export const LazyElIconGoldMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
export const LazyElIconGobletFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
export const LazyElIconGobletSquareFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
export const LazyElIconGobletSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
export const LazyElIconGrape: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
export const LazyElIconFullScreen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
export const LazyElIconGoodsFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
export const LazyElIconHeadset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
export const LazyElIconHelpFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
export const LazyElIconGuide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
export const LazyElIconHelp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
export const LazyElIconHandbag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
export const LazyElIconHide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
export const LazyElIconGrid: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
export const LazyElIconIceCream: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
export const LazyElIconHouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
export const LazyElIconIphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
export const LazyElIconHistogram: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
export const LazyElIconIceCreamSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
export const LazyElIconIceCreamRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
export const LazyElIconHotWater: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
export const LazyElIconIceDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
export const LazyElIconInfoFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
export const LazyElIconKey: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
export const LazyElIconHomeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
export const LazyElIconKnifeFork: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
export const LazyElIconList: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
export const LazyElIconIceTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
export const LazyElIconLoading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
export const LazyElIconLightning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
export const LazyElIconLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
export const LazyElIconLock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
export const LazyElIconLocationInformation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
export const LazyElIconMagnet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
export const LazyElIconLocationFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
export const LazyElIconMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
export const LazyElIconMale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
export const LazyElIconLink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
export const LazyElIconMemo: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
export const LazyElIconLollipop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
export const LazyElIconMapLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
export const LazyElIconMagicStick: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
export const LazyElIconMessageBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
export const LazyElIconManagement: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
export const LazyElIconMenu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
export const LazyElIconMic: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
export const LazyElIconMessage: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
export const LazyElIconMoonNight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
export const LazyElIconMicrophone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
export const LazyElIconMoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
export const LazyElIconMoney: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
export const LazyElIconMinus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
export const LazyElIconMilkTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
export const LazyElIconMute: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
export const LazyElIconMonitor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
export const LazyElIconMug: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
export const LazyElIconMostlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
export const LazyElIconMoreFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
export const LazyElIconOfficeBuilding: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
export const LazyElIconNotebook: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
export const LazyElIconMore: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
export const LazyElIconMuteNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
export const LazyElIconMouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
export const LazyElIconNoSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
export const LazyElIconOdometer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
export const LazyElIconNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
export const LazyElIconOperation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
export const LazyElIconOpen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
export const LazyElIconOrange: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
export const LazyElIconPaperclip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
export const LazyElIconPear: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
export const LazyElIconPhone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
export const LazyElIconOpportunity: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
export const LazyElIconPartlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
export const LazyElIconPieChart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
export const LazyElIconPhoneFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
export const LazyElIconPlatform: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
export const LazyElIconPictureFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
export const LazyElIconPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
export const LazyElIconPresent: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
export const LazyElIconPictureRounded: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
export const LazyElIconPriceTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
export const LazyElIconPointer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
export const LazyElIconPlace: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
export const LazyElIconPicture: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
export const LazyElIconPouring: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
export const LazyElIconQuartzWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
export const LazyElIconPromotion: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
export const LazyElIconPosition: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
export const LazyElIconPostcard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
export const LazyElIconRefresh: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
export const LazyElIconPrinter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
export const LazyElIconQuestionFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
export const LazyElIconReading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
export const LazyElIconRefreshLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
export const LazyElIconRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
export const LazyElIconReadingLamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
export const LazyElIconRefreshRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
export const LazyElIconRemoveFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
export const LazyElIconRank: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
export const LazyElIconScissor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
export const LazyElIconRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
export const LazyElIconSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
export const LazyElIconSchool: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
export const LazyElIconSell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
export const LazyElIconSearch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
export const LazyElIconRefrigerator: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
export const LazyElIconSemiSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
export const LazyElIconScaleToOriginal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
export const LazyElIconSetting: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
export const LazyElIconService: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
export const LazyElIconSetUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
export const LazyElIconShare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
export const LazyElIconShoppingTrolley: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
export const LazyElIconShip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
export const LazyElIconSoldOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
export const LazyElIconShop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
export const LazyElIconShoppingCart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
export const LazyElIconShoppingBag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
export const LazyElIconSoccer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
export const LazyElIconSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
export const LazyElIconSort: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
export const LazyElIconShoppingCartFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
export const LazyElIconStarFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
export const LazyElIconSortUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
export const LazyElIconSortDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
export const LazyElIconSuccessFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
export const LazyElIconStopwatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
export const LazyElIconStar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
export const LazyElIconSuitcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
export const LazyElIconSunny: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
export const LazyElIconStamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
export const LazyElIconSwitch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
export const LazyElIconSunrise: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
export const LazyElIconTakeawayBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
export const LazyElIconSugar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
export const LazyElIconSwitchFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
export const LazyElIconSunset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
export const LazyElIconSuitcaseLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
export const LazyElIconTickets: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
export const LazyElIconTimer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
export const LazyElIconSwitchButton: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
export const LazyElIconTicket: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
export const LazyElIconTopLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
export const LazyElIconTools: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
export const LazyElIconToiletPaper: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
export const LazyElIconTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
export const LazyElIconTrendCharts: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
export const LazyElIconTopRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
export const LazyElIconUmbrella: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
export const LazyElIconTurnOff: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
export const LazyElIconTrophy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
export const LazyElIconUploadFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
export const LazyElIconUpload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
export const LazyElIconTrophyBase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
export const LazyElIconUser: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
export const LazyElIconUnlock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
export const LazyElIconUserFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
export const LazyElIconVan: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
export const LazyElIconView: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
export const LazyElIconVideoCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
export const LazyElIconVideoCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
export const LazyElIconVideoPlay: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
export const LazyElIconWarnTriangleFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
export const LazyElIconWallet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
export const LazyElIconWalletFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
export const LazyElIconVideoPause: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
export const LazyElIconWatermelon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
export const LazyElIconZoomIn: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
export const LazyElIconWindPower: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
export const LazyElIconWarning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
export const LazyElIconZoomOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
export const LazyElIconWarningFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
export const LazyElIconWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
