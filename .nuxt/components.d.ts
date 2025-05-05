
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
    'ElAnchorLink': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
    'ElAnchor': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
    'ElBadge': typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
    'ElAutoResizer': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
    'ElAside': typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
    'ElAvatar': typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
    'ElAlert': typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
    'ElAffix': typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
    'ElAutocomplete': typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
    'ElButton': typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
    'ElBreadcrumb': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
    'ElCarouselItem': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
    'ElCascader': typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
    'ElCarousel': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
    'ElBreadcrumbItem': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
    'ElBacktop': typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
    'ElCascaderPanel': typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
    'ElCollapse': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
    'ElCheckboxGroup': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
    'ElCard': typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
    'ElCheckbox': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
    'ElCheckTag': typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
    'ElCalendar': typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
    'ElCollection': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
    'ElButtonGroup': typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
    'ElCollectionItem': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
    'ElColorPicker': typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
    'ElConfigProvider': typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
    'ElCollapseTransition': typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
    'ElDialog': typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
    'ElCountdown': typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
    'ElContainer': typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
    'ElCollapseItem': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
    'ElCol': typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
    'ElDrawer': typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
    'ElDatePicker': typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
    'ElDivider': typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
    'ElDescriptions': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
    'ElCheckboxButton': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
    'ElDropdown': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
    'ElDropdownMenu': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
    'ElEmpty': typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
    'ElIcon': typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
    'ElForm': typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
    'ElFormItem': typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
    'ElHeader': typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
    'ElImageViewer': typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
    'ElDescriptionsItem': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
    'ElInputNumber': typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
    'ElInput': typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
    'ElMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
    'ElDropdownItem': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
    'ElLink': typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
    'ElOption': typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
    'ElImage': typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
    'ElPagination': typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
    'ElMain': typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
    'ElMenuItem': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
    'ElOptionGroup': typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
    'ElPopconfirm': typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
    'ElPopper': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
    'ElPopperArrow': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
    'ElFooter': typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
    'ElPageHeader': typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
    'ElMenuItemGroup': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
    'ElPopperContent': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
    'ElOverlay': typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
    'ElProgress': typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
    'ElMention': typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
    'ElRow': typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
    'ElInputTag': typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
    'ElRadioButton': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
    'ElRadioGroup': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
    'ElPopover': typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
    'ElRate': typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
    'ElRadio': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
    'ElResult': typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
    'ElSelect': typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
    'ElSkeleton': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
    'ElPopperTrigger': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
    'ElScrollbar': typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
    'ElSelectV2': typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
    'ElSegmented': typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
    'ElSlider': typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
    'ElSwitch': typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
    'ElStatistic': typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
    'ElSteps': typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
    'ElSpace': typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
    'ElSkeletonItem': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
    'ElTag': typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
    'ElTimePicker': typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
    'ElStep': typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
    'ElTableV2': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
    'ElTable': typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
    'ElTabs': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
    'ElSubMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
    'ElText': typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
    'ElTableColumn': typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
    'ElTooltip': typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
    'ElTimeline': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
    'ElTimeSelect': typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
    'ElTabPane': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
    'ElTour': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
    'ElTreeSelect': typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
    'ElTreeV2': typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
    'ElTree': typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
    'ElTimelineItem': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
    'ElIconAim': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
    'ElIconApple': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
    'ElTourStep': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
    'ElIconAddLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
    'ElWatermark': typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
    'ElIconArrowDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
    'ElIconArrowDownBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
    'ElTransfer': typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
    'ElIconArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
    'ElIconArrowUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
    'ElUpload': typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
    'ElIconArrowRightBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
    'ElIconArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
    'ElIconArrowLeftBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
    'ElIconAlarmClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
    'ElIconBack': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
    'ElIconBasketball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
    'ElIconBellFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
    'ElIconBaseball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
    'ElIconArrowUpBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
    'ElIconAvatar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
    'ElIconBell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
    'ElIconBottomLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
    'ElIconBottomRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
    'ElIconBicycle': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
    'ElIconBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
    'ElIconBowl': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
    'ElIconBrush': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
    'ElIconCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
    'ElIconBrushFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
    'ElIconBriefcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
    'ElIconCalendar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
    'ElIconBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
    'ElIconChatDotRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
    'ElIconBurger': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
    'ElIconCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
    'ElIconChatLineSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
    'ElIconCaretBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
    'ElIconCaretTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
    'ElIconCaretRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
    'ElIconChatSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
    'ElIconChatLineRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
    'ElIconChatDotSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
    'ElIconCellphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
    'ElIconCherry': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
    'ElIconChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
    'ElIconChromeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
    'ElIconCaretLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
    'ElIconCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
    'ElIconChatRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
    'ElIconCircleCloseFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
    'ElIconCircleCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
    'ElIconCloseBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
    'ElIconCirclePlusFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
    'ElIconCoffee': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
    'ElIconCircleClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
    'ElIconClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
    'ElIconClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
    'ElIconCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
    'ElIconCircleCheckFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
    'ElIconCollectionTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
    'ElIconCoffeeCup': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
    'ElIconColdDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
    'ElIconCoin': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
    'ElIconCollection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
    'ElIconCoordinate': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
    'ElIconComment': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
    'ElIconCopyDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
    'ElIconChicken': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
    'ElIconCrop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
    'ElIconCompass': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
    'ElIconCreditCard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
    'ElIconDCaret': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
    'ElIconConnection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
    'ElIconDessert': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
    'ElIconCirclePlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
    'ElIconDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
    'ElIconDeleteFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
    'ElIconDataBoard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
    'ElIconDeleteLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
    'ElIconDArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
    'ElIconDataLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
    'ElIconCpu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
    'ElIconDiscount': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
    'ElIconDishDot': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
    'ElIconDocumentDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
    'ElIconDataAnalysis': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
    'ElIconDArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
    'ElIconDish': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
    'ElIconDrizzling': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
    'ElIconDocumentAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
    'ElIconDocumentChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
    'ElIconEdit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
    'ElIconDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
    'ElIconDocumentCopy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
    'ElIconDocumentRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
    'ElIconEleme': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
    'ElIconFailed': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
    'ElIconEditPen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
    'ElIconElemeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
    'ElIconFiles': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
    'ElIconFemale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
    'ElIconDownload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
    'ElIconFinished': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
    'ElIconElementPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
    'ElIconFlag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
    'ElIconFilter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
    'ElIconExpand': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
    'ElIconFirstAidKit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
    'ElIconFolderAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
    'ElIconFilm': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
    'ElIconFolder': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
    'ElIconFolderDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
    'ElIconFold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
    'ElIconFolderRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
    'ElIconForkSpoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
    'ElIconFullScreen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
    'ElIconFolderOpened': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
    'ElIconFood': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
    'ElIconGoblet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
    'ElIconGobletFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
    'ElIconGoldMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
    'ElIconGobletSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
    'ElIconGobletSquareFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
    'ElIconFries': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
    'ElIconFolderChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
    'ElIconHandbag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
    'ElIconHeadset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
    'ElIconGoodsFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
    'ElIconGrape': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
    'ElIconGoods': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
    'ElIconFootball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
    'ElIconGrid': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
    'ElIconGuide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
    'ElIconHomeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
    'ElIconHistogram': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
    'ElIconHide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
    'ElIconHelp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
    'ElIconHelpFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
    'ElIconIceCream': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
    'ElIconHouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
    'ElIconInfoFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
    'ElIconHotWater': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
    'ElIconIceTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
    'ElIconKey': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
    'ElIconIceCreamRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
    'ElIconIceCreamSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
    'ElIconList': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
    'ElIconLoading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
    'ElIconKnifeFork': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
    'ElIconIphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
    'ElIconLock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
    'ElIconLocationInformation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
    'ElIconLink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
    'ElIconLightning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
    'ElIconLocationFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
    'ElIconLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
    'ElIconMagicStick': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
    'ElIconLollipop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
    'ElIconIceDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
    'ElIconMagnet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
    'ElIconMale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
    'ElIconMessage': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
    'ElIconManagement': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
    'ElIconMessageBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
    'ElIconMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
    'ElIconMapLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
    'ElIconMoney': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
    'ElIconMicrophone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
    'ElIconMemo': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
    'ElIconMinus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
    'ElIconMic': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
    'ElIconMonitor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
    'ElIconMenu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
    'ElIconMouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
    'ElIconMoonNight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
    'ElIconMore': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
    'ElIconMoreFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
    'ElIconMostlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
    'ElIconMug': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
    'ElIconMilkTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
    'ElIconMute': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
    'ElIconNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
    'ElIconNoSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
    'ElIconOdometer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
    'ElIconMoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
    'ElIconMuteNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
    'ElIconOperation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
    'ElIconOpen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
    'ElIconOfficeBuilding': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
    'ElIconOpportunity': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
    'ElIconPhone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
    'ElIconNotebook': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
    'ElIconPear': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
    'ElIconPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
    'ElIconPaperclip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
    'ElIconPictureFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
    'ElIconPartlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
    'ElIconPicture': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
    'ElIconPictureRounded': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
    'ElIconOrange': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
    'ElIconPhoneFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
    'ElIconPosition': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
    'ElIconPromotion': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
    'ElIconPlatform': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
    'ElIconPlace': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
    'ElIconPieChart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
    'ElIconPostcard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
    'ElIconQuestionFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
    'ElIconPouring': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
    'ElIconRank': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
    'ElIconPrinter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
    'ElIconPointer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
    'ElIconPresent': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
    'ElIconQuartzWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
    'ElIconScaleToOriginal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
    'ElIconRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
    'ElIconPriceTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
    'ElIconRefreshLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
    'ElIconReadingLamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
    'ElIconRefrigerator': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
    'ElIconReading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
    'ElIconRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
    'ElIconRemoveFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
    'ElIconSchool': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
    'ElIconSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
    'ElIconScissor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
    'ElIconSell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
    'ElIconSearch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
    'ElIconRefresh': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
    'ElIconShare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
    'ElIconSemiSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
    'ElIconShop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
    'ElIconService': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
    'ElIconShoppingBag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
    'ElIconShip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
    'ElIconSetting': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
    'ElIconSetUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
    'ElIconSoldOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
    'ElIconShoppingCartFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
    'ElIconSoccer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
    'ElIconSort': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
    'ElIconSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
    'ElIconShoppingCart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
    'ElIconSortDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
    'ElIconRefreshRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
    'ElIconStamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
    'ElIconStopwatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
    'ElIconSortUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
    'ElIconSunrise': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
    'ElIconSuccessFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
    'ElIconSunset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
    'ElIconSugar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
    'ElIconSwitchFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
    'ElIconStar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
    'ElIconSuitcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
    'ElIconTimer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
    'ElIconTicket': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
    'ElIconShoppingTrolley': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
    'ElIconSwitch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
    'ElIconTickets': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
    'ElIconTakeawayBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
    'ElIconSunny': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
    'ElIconTools': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
    'ElIconTopLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
    'ElIconSwitchButton': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
    'ElIconStarFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
    'ElIconTrophyBase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
    'ElIconTopRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
    'ElIconToiletPaper': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
    'ElIconUpload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
    'ElIconUploadFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
    'ElIconTrendCharts': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
    'ElIconTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
    'ElIconUnlock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
    'ElIconTurnOff': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
    'ElIconTrophy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
    'ElIconUserFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
    'ElIconUmbrella': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
    'ElIconUser': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
    'ElIconVan': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
    'ElIconWalletFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
    'ElIconSuitcaseLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
    'ElIconView': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
    'ElIconVideoCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
    'ElIconWallet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
    'ElIconVideoPlay': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
    'ElIconZoomIn': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
    'ElIconWarnTriangleFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
    'ElIconWarningFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
    'ElIconVideoPause': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
    'ElIconWarning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
    'ElIconWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
    'ElIconWatermelon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
    'ElIconWindPower': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
    'ElIconZoomOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
    'ElIconVideoCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
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
    'LazyElAnchorLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
    'LazyElAnchor': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
    'LazyElBadge': LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
    'LazyElAutoResizer': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
    'LazyElAside': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
    'LazyElAvatar': LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
    'LazyElAlert': LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
    'LazyElAffix': LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
    'LazyElAutocomplete': LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
    'LazyElButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
    'LazyElBreadcrumb': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
    'LazyElCarouselItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
    'LazyElCascader': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
    'LazyElCarousel': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
    'LazyElBreadcrumbItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
    'LazyElBacktop': LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
    'LazyElCascaderPanel': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
    'LazyElCollapse': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
    'LazyElCheckboxGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
    'LazyElCard': LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
    'LazyElCheckbox': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
    'LazyElCheckTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
    'LazyElCalendar': LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
    'LazyElCollection': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
    'LazyElButtonGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
    'LazyElCollectionItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
    'LazyElColorPicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
    'LazyElConfigProvider': LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
    'LazyElCollapseTransition': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
    'LazyElDialog': LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
    'LazyElCountdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
    'LazyElContainer': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
    'LazyElCollapseItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
    'LazyElCol': LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
    'LazyElDrawer': LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
    'LazyElDatePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
    'LazyElDivider': LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
    'LazyElDescriptions': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
    'LazyElCheckboxButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
    'LazyElDropdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
    'LazyElDropdownMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
    'LazyElEmpty': LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
    'LazyElIcon': LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
    'LazyElForm': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
    'LazyElFormItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
    'LazyElHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
    'LazyElImageViewer': LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
    'LazyElDescriptionsItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
    'LazyElInputNumber': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
    'LazyElInput': LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
    'LazyElMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
    'LazyElDropdownItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
    'LazyElLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
    'LazyElOption': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
    'LazyElImage': LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
    'LazyElPagination': LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
    'LazyElMain': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
    'LazyElMenuItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
    'LazyElOptionGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
    'LazyElPopconfirm': LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
    'LazyElPopper': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
    'LazyElPopperArrow': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
    'LazyElFooter': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
    'LazyElPageHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
    'LazyElMenuItemGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
    'LazyElPopperContent': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
    'LazyElOverlay': LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
    'LazyElProgress': LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
    'LazyElMention': LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
    'LazyElRow': LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
    'LazyElInputTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
    'LazyElRadioButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
    'LazyElRadioGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
    'LazyElPopover': LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
    'LazyElRate': LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
    'LazyElRadio': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
    'LazyElResult': LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
    'LazyElSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
    'LazyElSkeleton': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
    'LazyElPopperTrigger': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
    'LazyElScrollbar': LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
    'LazyElSelectV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
    'LazyElSegmented': LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
    'LazyElSlider': LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
    'LazyElSwitch': LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
    'LazyElStatistic': LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
    'LazyElSteps': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
    'LazyElSpace': LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
    'LazyElSkeletonItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
    'LazyElTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
    'LazyElTimePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
    'LazyElStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
    'LazyElTableV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
    'LazyElTable': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
    'LazyElTabs': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
    'LazyElSubMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
    'LazyElText': LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
    'LazyElTableColumn': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
    'LazyElTooltip': LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
    'LazyElTimeline': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
    'LazyElTimeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
    'LazyElTabPane': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
    'LazyElTour': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
    'LazyElTreeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
    'LazyElTreeV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
    'LazyElTree': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
    'LazyElTimelineItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
    'LazyElIconAim': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
    'LazyElIconApple': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
    'LazyElTourStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
    'LazyElIconAddLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
    'LazyElWatermark': LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
    'LazyElIconArrowDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
    'LazyElIconArrowDownBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
    'LazyElTransfer': LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
    'LazyElIconArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
    'LazyElIconArrowUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
    'LazyElUpload': LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
    'LazyElIconArrowRightBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
    'LazyElIconArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
    'LazyElIconArrowLeftBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
    'LazyElIconAlarmClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
    'LazyElIconBack': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
    'LazyElIconBasketball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
    'LazyElIconBellFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
    'LazyElIconBaseball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
    'LazyElIconArrowUpBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
    'LazyElIconAvatar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
    'LazyElIconBell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
    'LazyElIconBottomLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
    'LazyElIconBottomRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
    'LazyElIconBicycle': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
    'LazyElIconBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
    'LazyElIconBowl': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
    'LazyElIconBrush': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
    'LazyElIconCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
    'LazyElIconBrushFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
    'LazyElIconBriefcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
    'LazyElIconCalendar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
    'LazyElIconBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
    'LazyElIconChatDotRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
    'LazyElIconBurger': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
    'LazyElIconCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
    'LazyElIconChatLineSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
    'LazyElIconCaretBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
    'LazyElIconCaretTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
    'LazyElIconCaretRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
    'LazyElIconChatSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
    'LazyElIconChatLineRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
    'LazyElIconChatDotSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
    'LazyElIconCellphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
    'LazyElIconCherry': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
    'LazyElIconChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
    'LazyElIconChromeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
    'LazyElIconCaretLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
    'LazyElIconCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
    'LazyElIconChatRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
    'LazyElIconCircleCloseFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
    'LazyElIconCircleCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
    'LazyElIconCloseBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
    'LazyElIconCirclePlusFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
    'LazyElIconCoffee': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
    'LazyElIconCircleClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
    'LazyElIconClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
    'LazyElIconClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
    'LazyElIconCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
    'LazyElIconCircleCheckFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
    'LazyElIconCollectionTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
    'LazyElIconCoffeeCup': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
    'LazyElIconColdDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
    'LazyElIconCoin': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
    'LazyElIconCollection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
    'LazyElIconCoordinate': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
    'LazyElIconComment': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
    'LazyElIconCopyDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
    'LazyElIconChicken': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
    'LazyElIconCrop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
    'LazyElIconCompass': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
    'LazyElIconCreditCard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
    'LazyElIconDCaret': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
    'LazyElIconConnection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
    'LazyElIconDessert': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
    'LazyElIconCirclePlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
    'LazyElIconDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
    'LazyElIconDeleteFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
    'LazyElIconDataBoard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
    'LazyElIconDeleteLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
    'LazyElIconDArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
    'LazyElIconDataLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
    'LazyElIconCpu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
    'LazyElIconDiscount': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
    'LazyElIconDishDot': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
    'LazyElIconDocumentDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
    'LazyElIconDataAnalysis': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
    'LazyElIconDArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
    'LazyElIconDish': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
    'LazyElIconDrizzling': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
    'LazyElIconDocumentAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
    'LazyElIconDocumentChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
    'LazyElIconEdit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
    'LazyElIconDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
    'LazyElIconDocumentCopy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
    'LazyElIconDocumentRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
    'LazyElIconEleme': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
    'LazyElIconFailed': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
    'LazyElIconEditPen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
    'LazyElIconElemeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
    'LazyElIconFiles': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
    'LazyElIconFemale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
    'LazyElIconDownload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
    'LazyElIconFinished': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
    'LazyElIconElementPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
    'LazyElIconFlag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
    'LazyElIconFilter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
    'LazyElIconExpand': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
    'LazyElIconFirstAidKit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
    'LazyElIconFolderAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
    'LazyElIconFilm': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
    'LazyElIconFolder': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
    'LazyElIconFolderDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
    'LazyElIconFold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
    'LazyElIconFolderRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
    'LazyElIconForkSpoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
    'LazyElIconFullScreen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
    'LazyElIconFolderOpened': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
    'LazyElIconFood': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
    'LazyElIconGoblet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
    'LazyElIconGobletFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
    'LazyElIconGoldMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
    'LazyElIconGobletSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
    'LazyElIconGobletSquareFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
    'LazyElIconFries': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
    'LazyElIconFolderChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
    'LazyElIconHandbag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
    'LazyElIconHeadset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
    'LazyElIconGoodsFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
    'LazyElIconGrape': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
    'LazyElIconGoods': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
    'LazyElIconFootball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
    'LazyElIconGrid': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
    'LazyElIconGuide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
    'LazyElIconHomeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
    'LazyElIconHistogram': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
    'LazyElIconHide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
    'LazyElIconHelp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
    'LazyElIconHelpFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
    'LazyElIconIceCream': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
    'LazyElIconHouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
    'LazyElIconInfoFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
    'LazyElIconHotWater': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
    'LazyElIconIceTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
    'LazyElIconKey': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
    'LazyElIconIceCreamRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
    'LazyElIconIceCreamSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
    'LazyElIconList': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
    'LazyElIconLoading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
    'LazyElIconKnifeFork': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
    'LazyElIconIphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
    'LazyElIconLock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
    'LazyElIconLocationInformation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
    'LazyElIconLink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
    'LazyElIconLightning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
    'LazyElIconLocationFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
    'LazyElIconLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
    'LazyElIconMagicStick': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
    'LazyElIconLollipop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
    'LazyElIconIceDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
    'LazyElIconMagnet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
    'LazyElIconMale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
    'LazyElIconMessage': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
    'LazyElIconManagement': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
    'LazyElIconMessageBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
    'LazyElIconMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
    'LazyElIconMapLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
    'LazyElIconMoney': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
    'LazyElIconMicrophone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
    'LazyElIconMemo': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
    'LazyElIconMinus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
    'LazyElIconMic': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
    'LazyElIconMonitor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
    'LazyElIconMenu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
    'LazyElIconMouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
    'LazyElIconMoonNight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
    'LazyElIconMore': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
    'LazyElIconMoreFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
    'LazyElIconMostlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
    'LazyElIconMug': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
    'LazyElIconMilkTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
    'LazyElIconMute': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
    'LazyElIconNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
    'LazyElIconNoSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
    'LazyElIconOdometer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
    'LazyElIconMoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
    'LazyElIconMuteNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
    'LazyElIconOperation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
    'LazyElIconOpen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
    'LazyElIconOfficeBuilding': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
    'LazyElIconOpportunity': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
    'LazyElIconPhone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
    'LazyElIconNotebook': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
    'LazyElIconPear': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
    'LazyElIconPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
    'LazyElIconPaperclip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
    'LazyElIconPictureFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
    'LazyElIconPartlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
    'LazyElIconPicture': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
    'LazyElIconPictureRounded': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
    'LazyElIconOrange': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
    'LazyElIconPhoneFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
    'LazyElIconPosition': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
    'LazyElIconPromotion': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
    'LazyElIconPlatform': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
    'LazyElIconPlace': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
    'LazyElIconPieChart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
    'LazyElIconPostcard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
    'LazyElIconQuestionFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
    'LazyElIconPouring': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
    'LazyElIconRank': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
    'LazyElIconPrinter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
    'LazyElIconPointer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
    'LazyElIconPresent': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
    'LazyElIconQuartzWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
    'LazyElIconScaleToOriginal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
    'LazyElIconRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
    'LazyElIconPriceTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
    'LazyElIconRefreshLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
    'LazyElIconReadingLamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
    'LazyElIconRefrigerator': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
    'LazyElIconReading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
    'LazyElIconRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
    'LazyElIconRemoveFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
    'LazyElIconSchool': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
    'LazyElIconSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
    'LazyElIconScissor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
    'LazyElIconSell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
    'LazyElIconSearch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
    'LazyElIconRefresh': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
    'LazyElIconShare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
    'LazyElIconSemiSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
    'LazyElIconShop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
    'LazyElIconService': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
    'LazyElIconShoppingBag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
    'LazyElIconShip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
    'LazyElIconSetting': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
    'LazyElIconSetUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
    'LazyElIconSoldOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
    'LazyElIconShoppingCartFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
    'LazyElIconSoccer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
    'LazyElIconSort': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
    'LazyElIconSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
    'LazyElIconShoppingCart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
    'LazyElIconSortDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
    'LazyElIconRefreshRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
    'LazyElIconStamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
    'LazyElIconStopwatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
    'LazyElIconSortUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
    'LazyElIconSunrise': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
    'LazyElIconSuccessFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
    'LazyElIconSunset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
    'LazyElIconSugar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
    'LazyElIconSwitchFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
    'LazyElIconStar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
    'LazyElIconSuitcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
    'LazyElIconTimer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
    'LazyElIconTicket': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
    'LazyElIconShoppingTrolley': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
    'LazyElIconSwitch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
    'LazyElIconTickets': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
    'LazyElIconTakeawayBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
    'LazyElIconSunny': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
    'LazyElIconTools': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
    'LazyElIconTopLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
    'LazyElIconSwitchButton': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
    'LazyElIconStarFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
    'LazyElIconTrophyBase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
    'LazyElIconTopRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
    'LazyElIconToiletPaper': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
    'LazyElIconUpload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
    'LazyElIconUploadFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
    'LazyElIconTrendCharts': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
    'LazyElIconTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
    'LazyElIconUnlock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
    'LazyElIconTurnOff': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
    'LazyElIconTrophy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
    'LazyElIconUserFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
    'LazyElIconUmbrella': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
    'LazyElIconUser': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
    'LazyElIconVan': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
    'LazyElIconWalletFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
    'LazyElIconSuitcaseLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
    'LazyElIconView': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
    'LazyElIconVideoCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
    'LazyElIconWallet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
    'LazyElIconVideoPlay': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
    'LazyElIconZoomIn': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
    'LazyElIconWarnTriangleFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
    'LazyElIconWarningFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
    'LazyElIconVideoPause': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
    'LazyElIconWarning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
    'LazyElIconWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
    'LazyElIconWatermelon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
    'LazyElIconWindPower': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
    'LazyElIconZoomOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
    'LazyElIconVideoCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
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
export const ElAnchorLink: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
export const ElAnchor: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
export const ElBadge: typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
export const ElAutoResizer: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
export const ElAside: typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
export const ElAvatar: typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
export const ElAlert: typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
export const ElAffix: typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
export const ElAutocomplete: typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
export const ElButton: typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
export const ElBreadcrumb: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
export const ElCarouselItem: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
export const ElCascader: typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
export const ElCarousel: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
export const ElBreadcrumbItem: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
export const ElBacktop: typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
export const ElCascaderPanel: typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
export const ElCollapse: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
export const ElCheckboxGroup: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
export const ElCard: typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
export const ElCheckbox: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
export const ElCheckTag: typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
export const ElCalendar: typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
export const ElCollection: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
export const ElButtonGroup: typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
export const ElCollectionItem: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
export const ElColorPicker: typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
export const ElConfigProvider: typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
export const ElCollapseTransition: typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
export const ElDialog: typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
export const ElCountdown: typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
export const ElContainer: typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
export const ElCollapseItem: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
export const ElCol: typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
export const ElDrawer: typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
export const ElDatePicker: typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
export const ElDivider: typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
export const ElDescriptions: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
export const ElCheckboxButton: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
export const ElDropdown: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
export const ElDropdownMenu: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
export const ElEmpty: typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
export const ElIcon: typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
export const ElForm: typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
export const ElFormItem: typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
export const ElHeader: typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
export const ElImageViewer: typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
export const ElDescriptionsItem: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
export const ElInputNumber: typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
export const ElInput: typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
export const ElMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
export const ElDropdownItem: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
export const ElLink: typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
export const ElOption: typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
export const ElImage: typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
export const ElPagination: typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
export const ElMain: typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
export const ElMenuItem: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
export const ElOptionGroup: typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
export const ElPopconfirm: typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
export const ElPopper: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
export const ElPopperArrow: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
export const ElFooter: typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
export const ElPageHeader: typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
export const ElMenuItemGroup: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
export const ElPopperContent: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
export const ElOverlay: typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
export const ElProgress: typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
export const ElMention: typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
export const ElRow: typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
export const ElInputTag: typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
export const ElRadioButton: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
export const ElRadioGroup: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
export const ElPopover: typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
export const ElRate: typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
export const ElRadio: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
export const ElResult: typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
export const ElSelect: typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
export const ElSkeleton: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
export const ElPopperTrigger: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
export const ElScrollbar: typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
export const ElSelectV2: typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
export const ElSegmented: typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
export const ElSlider: typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
export const ElSwitch: typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
export const ElStatistic: typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
export const ElSteps: typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
export const ElSpace: typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
export const ElSkeletonItem: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
export const ElTag: typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
export const ElTimePicker: typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
export const ElStep: typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
export const ElTableV2: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
export const ElTable: typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
export const ElTabs: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
export const ElSubMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
export const ElText: typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
export const ElTableColumn: typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
export const ElTooltip: typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
export const ElTimeline: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
export const ElTimeSelect: typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
export const ElTabPane: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
export const ElTour: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
export const ElTreeSelect: typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
export const ElTreeV2: typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
export const ElTree: typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
export const ElTimelineItem: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
export const ElIconAim: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
export const ElIconApple: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
export const ElTourStep: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
export const ElIconAddLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
export const ElWatermark: typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
export const ElIconArrowDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
export const ElIconArrowDownBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
export const ElTransfer: typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
export const ElIconArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
export const ElIconArrowUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
export const ElUpload: typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
export const ElIconArrowRightBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
export const ElIconArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
export const ElIconArrowLeftBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
export const ElIconAlarmClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
export const ElIconBack: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
export const ElIconBasketball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
export const ElIconBellFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
export const ElIconBaseball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
export const ElIconArrowUpBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
export const ElIconAvatar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
export const ElIconBell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
export const ElIconBottomLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
export const ElIconBottomRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
export const ElIconBicycle: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
export const ElIconBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
export const ElIconBowl: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
export const ElIconBrush: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
export const ElIconCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
export const ElIconBrushFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
export const ElIconBriefcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
export const ElIconCalendar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
export const ElIconBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
export const ElIconChatDotRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
export const ElIconBurger: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
export const ElIconCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
export const ElIconChatLineSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
export const ElIconCaretBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
export const ElIconCaretTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
export const ElIconCaretRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
export const ElIconChatSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
export const ElIconChatLineRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
export const ElIconChatDotSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
export const ElIconCellphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
export const ElIconCherry: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
export const ElIconChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
export const ElIconChromeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
export const ElIconCaretLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
export const ElIconCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
export const ElIconChatRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
export const ElIconCircleCloseFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
export const ElIconCircleCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
export const ElIconCloseBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
export const ElIconCirclePlusFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
export const ElIconCoffee: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
export const ElIconCircleClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
export const ElIconClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
export const ElIconClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
export const ElIconCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
export const ElIconCircleCheckFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
export const ElIconCollectionTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
export const ElIconCoffeeCup: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
export const ElIconColdDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
export const ElIconCoin: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
export const ElIconCollection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
export const ElIconCoordinate: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
export const ElIconComment: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
export const ElIconCopyDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
export const ElIconChicken: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
export const ElIconCrop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
export const ElIconCompass: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
export const ElIconCreditCard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
export const ElIconDCaret: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
export const ElIconConnection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
export const ElIconDessert: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
export const ElIconCirclePlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
export const ElIconDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
export const ElIconDeleteFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
export const ElIconDataBoard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
export const ElIconDeleteLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
export const ElIconDArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
export const ElIconDataLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
export const ElIconCpu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
export const ElIconDiscount: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
export const ElIconDishDot: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
export const ElIconDocumentDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
export const ElIconDataAnalysis: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
export const ElIconDArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
export const ElIconDish: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
export const ElIconDrizzling: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
export const ElIconDocumentAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
export const ElIconDocumentChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
export const ElIconEdit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
export const ElIconDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
export const ElIconDocumentCopy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
export const ElIconDocumentRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
export const ElIconEleme: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
export const ElIconFailed: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
export const ElIconEditPen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
export const ElIconElemeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
export const ElIconFiles: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
export const ElIconFemale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
export const ElIconDownload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
export const ElIconFinished: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
export const ElIconElementPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
export const ElIconFlag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
export const ElIconFilter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
export const ElIconExpand: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
export const ElIconFirstAidKit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
export const ElIconFolderAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
export const ElIconFilm: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
export const ElIconFolder: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
export const ElIconFolderDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
export const ElIconFold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
export const ElIconFolderRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
export const ElIconForkSpoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
export const ElIconFullScreen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
export const ElIconFolderOpened: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
export const ElIconFood: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
export const ElIconGoblet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
export const ElIconGobletFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
export const ElIconGoldMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
export const ElIconGobletSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
export const ElIconGobletSquareFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
export const ElIconFries: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
export const ElIconFolderChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
export const ElIconHandbag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
export const ElIconHeadset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
export const ElIconGoodsFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
export const ElIconGrape: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
export const ElIconGoods: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
export const ElIconFootball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
export const ElIconGrid: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
export const ElIconGuide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
export const ElIconHomeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
export const ElIconHistogram: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
export const ElIconHide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
export const ElIconHelp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
export const ElIconHelpFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
export const ElIconIceCream: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
export const ElIconHouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
export const ElIconInfoFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
export const ElIconHotWater: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
export const ElIconIceTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
export const ElIconKey: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
export const ElIconIceCreamRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
export const ElIconIceCreamSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
export const ElIconList: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
export const ElIconLoading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
export const ElIconKnifeFork: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
export const ElIconIphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
export const ElIconLock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
export const ElIconLocationInformation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
export const ElIconLink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
export const ElIconLightning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
export const ElIconLocationFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
export const ElIconLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
export const ElIconMagicStick: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
export const ElIconLollipop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
export const ElIconIceDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
export const ElIconMagnet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
export const ElIconMale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
export const ElIconMessage: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
export const ElIconManagement: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
export const ElIconMessageBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
export const ElIconMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
export const ElIconMapLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
export const ElIconMoney: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
export const ElIconMicrophone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
export const ElIconMemo: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
export const ElIconMinus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
export const ElIconMic: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
export const ElIconMonitor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
export const ElIconMenu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
export const ElIconMouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
export const ElIconMoonNight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
export const ElIconMore: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
export const ElIconMoreFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
export const ElIconMostlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
export const ElIconMug: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
export const ElIconMilkTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
export const ElIconMute: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
export const ElIconNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
export const ElIconNoSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
export const ElIconOdometer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
export const ElIconMoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
export const ElIconMuteNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
export const ElIconOperation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
export const ElIconOpen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
export const ElIconOfficeBuilding: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
export const ElIconOpportunity: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
export const ElIconPhone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
export const ElIconNotebook: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
export const ElIconPear: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
export const ElIconPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
export const ElIconPaperclip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
export const ElIconPictureFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
export const ElIconPartlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
export const ElIconPicture: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
export const ElIconPictureRounded: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
export const ElIconOrange: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
export const ElIconPhoneFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
export const ElIconPosition: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
export const ElIconPromotion: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
export const ElIconPlatform: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
export const ElIconPlace: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
export const ElIconPieChart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
export const ElIconPostcard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
export const ElIconQuestionFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
export const ElIconPouring: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
export const ElIconRank: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
export const ElIconPrinter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
export const ElIconPointer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
export const ElIconPresent: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
export const ElIconQuartzWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
export const ElIconScaleToOriginal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
export const ElIconRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
export const ElIconPriceTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
export const ElIconRefreshLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
export const ElIconReadingLamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
export const ElIconRefrigerator: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
export const ElIconReading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
export const ElIconRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
export const ElIconRemoveFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
export const ElIconSchool: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
export const ElIconSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
export const ElIconScissor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
export const ElIconSell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
export const ElIconSearch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
export const ElIconRefresh: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
export const ElIconShare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
export const ElIconSemiSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
export const ElIconShop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
export const ElIconService: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
export const ElIconShoppingBag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
export const ElIconShip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
export const ElIconSetting: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
export const ElIconSetUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
export const ElIconSoldOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
export const ElIconShoppingCartFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
export const ElIconSoccer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
export const ElIconSort: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
export const ElIconSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
export const ElIconShoppingCart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
export const ElIconSortDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
export const ElIconRefreshRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
export const ElIconStamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
export const ElIconStopwatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
export const ElIconSortUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
export const ElIconSunrise: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
export const ElIconSuccessFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
export const ElIconSunset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
export const ElIconSugar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
export const ElIconSwitchFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
export const ElIconStar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
export const ElIconSuitcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
export const ElIconTimer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
export const ElIconTicket: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
export const ElIconShoppingTrolley: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
export const ElIconSwitch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
export const ElIconTickets: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
export const ElIconTakeawayBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
export const ElIconSunny: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
export const ElIconTools: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
export const ElIconTopLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
export const ElIconSwitchButton: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
export const ElIconStarFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
export const ElIconTrophyBase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
export const ElIconTopRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
export const ElIconToiletPaper: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
export const ElIconUpload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
export const ElIconUploadFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
export const ElIconTrendCharts: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
export const ElIconTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
export const ElIconUnlock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
export const ElIconTurnOff: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
export const ElIconTrophy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
export const ElIconUserFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
export const ElIconUmbrella: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
export const ElIconUser: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
export const ElIconVan: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
export const ElIconWalletFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
export const ElIconSuitcaseLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
export const ElIconView: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
export const ElIconVideoCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
export const ElIconWallet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
export const ElIconVideoPlay: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
export const ElIconZoomIn: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
export const ElIconWarnTriangleFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
export const ElIconWarningFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
export const ElIconVideoPause: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
export const ElIconWarning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
export const ElIconWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
export const ElIconWatermelon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
export const ElIconWindPower: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
export const ElIconZoomOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
export const ElIconVideoCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
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
export const LazyElAnchorLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
export const LazyElAnchor: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
export const LazyElBadge: LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
export const LazyElAutoResizer: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
export const LazyElAside: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
export const LazyElAvatar: LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
export const LazyElAlert: LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
export const LazyElAffix: LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
export const LazyElAutocomplete: LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
export const LazyElButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
export const LazyElBreadcrumb: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
export const LazyElCarouselItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
export const LazyElCascader: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
export const LazyElCarousel: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
export const LazyElBreadcrumbItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
export const LazyElBacktop: LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
export const LazyElCascaderPanel: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
export const LazyElCollapse: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
export const LazyElCheckboxGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
export const LazyElCard: LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
export const LazyElCheckbox: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
export const LazyElCheckTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
export const LazyElCalendar: LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
export const LazyElCollection: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
export const LazyElButtonGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
export const LazyElCollectionItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
export const LazyElColorPicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
export const LazyElConfigProvider: LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
export const LazyElCollapseTransition: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
export const LazyElDialog: LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
export const LazyElCountdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
export const LazyElContainer: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
export const LazyElCollapseItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
export const LazyElCol: LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
export const LazyElDrawer: LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
export const LazyElDatePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
export const LazyElDivider: LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
export const LazyElDescriptions: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
export const LazyElCheckboxButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
export const LazyElDropdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
export const LazyElDropdownMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
export const LazyElEmpty: LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
export const LazyElIcon: LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
export const LazyElForm: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
export const LazyElFormItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
export const LazyElHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
export const LazyElImageViewer: LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
export const LazyElDescriptionsItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
export const LazyElInputNumber: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
export const LazyElInput: LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
export const LazyElMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
export const LazyElDropdownItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
export const LazyElLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
export const LazyElOption: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
export const LazyElImage: LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
export const LazyElPagination: LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
export const LazyElMain: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
export const LazyElMenuItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
export const LazyElOptionGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
export const LazyElPopconfirm: LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
export const LazyElPopper: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
export const LazyElPopperArrow: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
export const LazyElFooter: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
export const LazyElPageHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
export const LazyElMenuItemGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
export const LazyElPopperContent: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
export const LazyElOverlay: LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
export const LazyElProgress: LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
export const LazyElMention: LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
export const LazyElRow: LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
export const LazyElInputTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
export const LazyElRadioButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
export const LazyElRadioGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
export const LazyElPopover: LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
export const LazyElRate: LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
export const LazyElRadio: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
export const LazyElResult: LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
export const LazyElSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
export const LazyElSkeleton: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
export const LazyElPopperTrigger: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
export const LazyElScrollbar: LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
export const LazyElSelectV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
export const LazyElSegmented: LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
export const LazyElSlider: LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
export const LazyElSwitch: LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
export const LazyElStatistic: LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
export const LazyElSteps: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
export const LazyElSpace: LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
export const LazyElSkeletonItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
export const LazyElTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
export const LazyElTimePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
export const LazyElStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
export const LazyElTableV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
export const LazyElTable: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
export const LazyElTabs: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
export const LazyElSubMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
export const LazyElText: LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
export const LazyElTableColumn: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
export const LazyElTooltip: LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
export const LazyElTimeline: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
export const LazyElTimeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
export const LazyElTabPane: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
export const LazyElTour: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
export const LazyElTreeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
export const LazyElTreeV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
export const LazyElTree: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
export const LazyElTimelineItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
export const LazyElIconAim: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
export const LazyElIconApple: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
export const LazyElTourStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
export const LazyElIconAddLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
export const LazyElWatermark: LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
export const LazyElIconArrowDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
export const LazyElIconArrowDownBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
export const LazyElTransfer: LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
export const LazyElIconArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
export const LazyElIconArrowUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
export const LazyElUpload: LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
export const LazyElIconArrowRightBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
export const LazyElIconArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
export const LazyElIconArrowLeftBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
export const LazyElIconAlarmClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
export const LazyElIconBack: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
export const LazyElIconBasketball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
export const LazyElIconBellFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
export const LazyElIconBaseball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
export const LazyElIconArrowUpBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
export const LazyElIconAvatar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
export const LazyElIconBell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
export const LazyElIconBottomLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
export const LazyElIconBottomRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
export const LazyElIconBicycle: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
export const LazyElIconBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
export const LazyElIconBowl: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
export const LazyElIconBrush: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
export const LazyElIconCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
export const LazyElIconBrushFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
export const LazyElIconBriefcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
export const LazyElIconCalendar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
export const LazyElIconBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
export const LazyElIconChatDotRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
export const LazyElIconBurger: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
export const LazyElIconCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
export const LazyElIconChatLineSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
export const LazyElIconCaretBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
export const LazyElIconCaretTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
export const LazyElIconCaretRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
export const LazyElIconChatSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
export const LazyElIconChatLineRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
export const LazyElIconChatDotSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
export const LazyElIconCellphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
export const LazyElIconCherry: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
export const LazyElIconChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
export const LazyElIconChromeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
export const LazyElIconCaretLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
export const LazyElIconCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
export const LazyElIconChatRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
export const LazyElIconCircleCloseFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
export const LazyElIconCircleCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
export const LazyElIconCloseBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
export const LazyElIconCirclePlusFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
export const LazyElIconCoffee: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
export const LazyElIconCircleClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
export const LazyElIconClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
export const LazyElIconClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
export const LazyElIconCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
export const LazyElIconCircleCheckFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
export const LazyElIconCollectionTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
export const LazyElIconCoffeeCup: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
export const LazyElIconColdDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
export const LazyElIconCoin: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
export const LazyElIconCollection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
export const LazyElIconCoordinate: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
export const LazyElIconComment: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
export const LazyElIconCopyDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
export const LazyElIconChicken: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
export const LazyElIconCrop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
export const LazyElIconCompass: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
export const LazyElIconCreditCard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
export const LazyElIconDCaret: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
export const LazyElIconConnection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
export const LazyElIconDessert: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
export const LazyElIconCirclePlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
export const LazyElIconDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
export const LazyElIconDeleteFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
export const LazyElIconDataBoard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
export const LazyElIconDeleteLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
export const LazyElIconDArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
export const LazyElIconDataLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
export const LazyElIconCpu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
export const LazyElIconDiscount: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
export const LazyElIconDishDot: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
export const LazyElIconDocumentDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
export const LazyElIconDataAnalysis: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
export const LazyElIconDArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
export const LazyElIconDish: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
export const LazyElIconDrizzling: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
export const LazyElIconDocumentAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
export const LazyElIconDocumentChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
export const LazyElIconEdit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
export const LazyElIconDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
export const LazyElIconDocumentCopy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
export const LazyElIconDocumentRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
export const LazyElIconEleme: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
export const LazyElIconFailed: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
export const LazyElIconEditPen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
export const LazyElIconElemeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
export const LazyElIconFiles: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
export const LazyElIconFemale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
export const LazyElIconDownload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
export const LazyElIconFinished: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
export const LazyElIconElementPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
export const LazyElIconFlag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
export const LazyElIconFilter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
export const LazyElIconExpand: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
export const LazyElIconFirstAidKit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
export const LazyElIconFolderAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
export const LazyElIconFilm: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
export const LazyElIconFolder: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
export const LazyElIconFolderDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
export const LazyElIconFold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
export const LazyElIconFolderRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
export const LazyElIconForkSpoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
export const LazyElIconFullScreen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
export const LazyElIconFolderOpened: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
export const LazyElIconFood: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
export const LazyElIconGoblet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
export const LazyElIconGobletFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
export const LazyElIconGoldMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
export const LazyElIconGobletSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
export const LazyElIconGobletSquareFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
export const LazyElIconFries: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
export const LazyElIconFolderChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
export const LazyElIconHandbag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
export const LazyElIconHeadset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
export const LazyElIconGoodsFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
export const LazyElIconGrape: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
export const LazyElIconGoods: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
export const LazyElIconFootball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
export const LazyElIconGrid: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
export const LazyElIconGuide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
export const LazyElIconHomeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
export const LazyElIconHistogram: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
export const LazyElIconHide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
export const LazyElIconHelp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
export const LazyElIconHelpFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
export const LazyElIconIceCream: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
export const LazyElIconHouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
export const LazyElIconInfoFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
export const LazyElIconHotWater: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
export const LazyElIconIceTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
export const LazyElIconKey: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
export const LazyElIconIceCreamRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
export const LazyElIconIceCreamSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
export const LazyElIconList: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
export const LazyElIconLoading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
export const LazyElIconKnifeFork: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
export const LazyElIconIphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
export const LazyElIconLock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
export const LazyElIconLocationInformation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
export const LazyElIconLink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
export const LazyElIconLightning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
export const LazyElIconLocationFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
export const LazyElIconLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
export const LazyElIconMagicStick: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
export const LazyElIconLollipop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
export const LazyElIconIceDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
export const LazyElIconMagnet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
export const LazyElIconMale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
export const LazyElIconMessage: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
export const LazyElIconManagement: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
export const LazyElIconMessageBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
export const LazyElIconMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
export const LazyElIconMapLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
export const LazyElIconMoney: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
export const LazyElIconMicrophone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
export const LazyElIconMemo: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
export const LazyElIconMinus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
export const LazyElIconMic: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
export const LazyElIconMonitor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
export const LazyElIconMenu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
export const LazyElIconMouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
export const LazyElIconMoonNight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
export const LazyElIconMore: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
export const LazyElIconMoreFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
export const LazyElIconMostlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
export const LazyElIconMug: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
export const LazyElIconMilkTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
export const LazyElIconMute: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
export const LazyElIconNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
export const LazyElIconNoSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
export const LazyElIconOdometer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
export const LazyElIconMoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
export const LazyElIconMuteNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
export const LazyElIconOperation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
export const LazyElIconOpen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
export const LazyElIconOfficeBuilding: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
export const LazyElIconOpportunity: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
export const LazyElIconPhone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
export const LazyElIconNotebook: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
export const LazyElIconPear: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
export const LazyElIconPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
export const LazyElIconPaperclip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
export const LazyElIconPictureFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
export const LazyElIconPartlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
export const LazyElIconPicture: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
export const LazyElIconPictureRounded: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
export const LazyElIconOrange: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
export const LazyElIconPhoneFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
export const LazyElIconPosition: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
export const LazyElIconPromotion: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
export const LazyElIconPlatform: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
export const LazyElIconPlace: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
export const LazyElIconPieChart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
export const LazyElIconPostcard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
export const LazyElIconQuestionFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
export const LazyElIconPouring: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
export const LazyElIconRank: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
export const LazyElIconPrinter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
export const LazyElIconPointer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
export const LazyElIconPresent: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
export const LazyElIconQuartzWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
export const LazyElIconScaleToOriginal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
export const LazyElIconRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
export const LazyElIconPriceTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
export const LazyElIconRefreshLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
export const LazyElIconReadingLamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
export const LazyElIconRefrigerator: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
export const LazyElIconReading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
export const LazyElIconRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
export const LazyElIconRemoveFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
export const LazyElIconSchool: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
export const LazyElIconSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
export const LazyElIconScissor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
export const LazyElIconSell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
export const LazyElIconSearch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
export const LazyElIconRefresh: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
export const LazyElIconShare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
export const LazyElIconSemiSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
export const LazyElIconShop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
export const LazyElIconService: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
export const LazyElIconShoppingBag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
export const LazyElIconShip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
export const LazyElIconSetting: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
export const LazyElIconSetUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
export const LazyElIconSoldOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
export const LazyElIconShoppingCartFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
export const LazyElIconSoccer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
export const LazyElIconSort: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
export const LazyElIconSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
export const LazyElIconShoppingCart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
export const LazyElIconSortDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
export const LazyElIconRefreshRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
export const LazyElIconStamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
export const LazyElIconStopwatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
export const LazyElIconSortUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
export const LazyElIconSunrise: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
export const LazyElIconSuccessFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
export const LazyElIconSunset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
export const LazyElIconSugar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
export const LazyElIconSwitchFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
export const LazyElIconStar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
export const LazyElIconSuitcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
export const LazyElIconTimer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
export const LazyElIconTicket: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
export const LazyElIconShoppingTrolley: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
export const LazyElIconSwitch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
export const LazyElIconTickets: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
export const LazyElIconTakeawayBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
export const LazyElIconSunny: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
export const LazyElIconTools: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
export const LazyElIconTopLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
export const LazyElIconSwitchButton: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
export const LazyElIconStarFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
export const LazyElIconTrophyBase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
export const LazyElIconTopRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
export const LazyElIconToiletPaper: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
export const LazyElIconUpload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
export const LazyElIconUploadFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
export const LazyElIconTrendCharts: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
export const LazyElIconTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
export const LazyElIconUnlock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
export const LazyElIconTurnOff: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
export const LazyElIconTrophy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
export const LazyElIconUserFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
export const LazyElIconUmbrella: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
export const LazyElIconUser: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
export const LazyElIconVan: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
export const LazyElIconWalletFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
export const LazyElIconSuitcaseLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
export const LazyElIconView: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
export const LazyElIconVideoCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
export const LazyElIconWallet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
export const LazyElIconVideoPlay: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
export const LazyElIconZoomIn: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
export const LazyElIconWarnTriangleFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
export const LazyElIconWarningFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
export const LazyElIconVideoPause: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
export const LazyElIconWarning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
export const LazyElIconWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
export const LazyElIconWatermelon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
export const LazyElIconWindPower: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
export const LazyElIconZoomOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
export const LazyElIconVideoCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
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
