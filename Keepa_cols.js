var cols = ["asin", "brand", "buyBoxIsFBA", "buyBoxSellerIdHistory", "fbaFees", "imagesCSV", "itemDimension", "itemWeight", "listedSince", "packageDimension", "packageWeight", "COUNT_REVIEWS_current", "RATING_current", "title", "trackingSince", "urlAmazon", "variationCSV", "rootCategory", "categoryTree", "SALES_avg30", "SALES_avg90", "SALES_current", "stockBuyBox", "BUY_BOX_SHIPPING_current"];

// ----------------------------------------------------------------------------------------------------------------------------
// <input id="asin-1657777039604" data-col-id="asin" type="checkbox" checked="checked" disabled="disabled" '="">
// <input id="brand-1657777039604" data-col-id="brand" type="checkbox" checked="checked" '="">
// <input id="buyBoxIsFBA-1657777039604" data-col-id="buyBoxIsFBA" type="checkbox" checked="checked" '="">
// <input id="buyBoxSellerIdHistory-1657777039604" data-col-id="buyBoxSellerIdHistory" type="checkbox" checked="checked" '="">
// <input id="fbaFees-1657777039604" data-col-id="fbaFees" type="checkbox" checked="checked" '="">
// <input id="imagesCSV-1657777039604" data-col-id="imagesCSV" type="checkbox" checked="checked" '="">
// <input id="itemDimension-1657777039604" data-col-id="itemDimension" type="checkbox" checked="checked" '="">
// <input id="itemWeight-1657777039604" data-col-id="itemWeight" type="checkbox" checked="checked" '="">
// <input id="listedSince-1657777039604" data-col-id="listedSince" type="checkbox" checked="checked" '="">
// <input id="packageDimension-1657777039604" data-col-id="packageDimension" type="checkbox" checked="checked" '="">
// <input id="packageWeight-1657777039604" data-col-id="packageWeight" type="checkbox" checked="checked" '="">
// <input id="COUNT_REVIEWS_current-1657777039604" data-col-id="COUNT_REVIEWS_current" type="checkbox" checked="checked" '="">
// <input id="RATING_current-1657777039604" data-col-id="RATING_current" type="checkbox" checked="checked" '="">
// <input id="title-1657777039604" data-col-id="title" type="checkbox" checked="checked" disabled="disabled" '="">
// <input id="trackingSince-1657777039604" data-col-id="trackingSince" type="checkbox" checked="checked" '="">
// <input id="urlAmazon-1657777039604" data-col-id="urlAmazon" type="checkbox" checked="checked" '="">
// <input id="variationCSV-1657777039604" data-col-id="variationCSV" type="checkbox" checked="checked" '="">
// <input id="rootCategory-1657777039604" data-col-id="rootCategory" type="checkbox" checked="checked" '="">
// <input id="categoryTree-1657777039604" data-col-id="categoryTree" type="checkbox" checked="checked" '="">
// <input id="SALES_avg30-1657777039604" data-col-id="SALES_avg30" type="checkbox" checked="checked" '="">
// <input id="SALES_avg90-1657777039604" data-col-id="SALES_avg90" type="checkbox" checked="checked" '="">
// <input id="SALES_current-1657777039604" data-col-id="SALES_current" type="checkbox" checked="checked" '="">
// <input id="stockBuyBox-1657777039604" data-col-id="stockBuyBox" type="checkbox" checked="checked" '="">
// <input id="BUY_BOX_SHIPPING_current-1657777039604" data-col-id="BUY_BOX_SHIPPING_current" type="checkbox" checked="checked" '="">
// ----------------------------------------------------------------------------------------------------------------------------
// <div id="mCSB_3_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
// <p data-search="Adult Product">
//     <input id="isAdultProduct-1657777039604" data-col-id="isAdultProduct" type="checkbox" '="">
//     <label for="isAdultProduct-1657777039604">Adult Product</label>
// </p>
// <p data-search="Amazon: 180 days avg.">
//     <input id="AMAZON_avg180-1657777039604" data-col-id="AMAZON_avg180" type="checkbox" '="">
//     <label for="AMAZON_avg180-1657777039604">Amazon: 180 days avg.</label>
// </p>
// <p data-search="Amazon: 30 days avg.">
//     <input id="AMAZON_avg30-1657777039604" data-col-id="AMAZON_avg30" type="checkbox" '="">
//     <label for="AMAZON_avg30-1657777039604">Amazon: 30 days avg.</label>
// </p>
// <p data-search="Amazon: 30 days drop %">
//     <input id="AMAZON_deltaPercent30-1657777039604" data-col-id="AMAZON_deltaPercent30" type="checkbox" '="">
//     <label for="AMAZON_deltaPercent30-1657777039604">Amazon: 30 days drop %</label>
// </p>
// <p data-search="Amazon: 90 days avg.">
//     <input id="AMAZON_avg90-1657777039604" data-col-id="AMAZON_avg90" type="checkbox" '="">
//     <label for="AMAZON_avg90-1657777039604">Amazon: 90 days avg.</label>
// </p>
// <p data-search="Amazon: 90 days drop %">
//     <input id="AMAZON_deltaPercent90-1657777039604" data-col-id="AMAZON_deltaPercent90" type="checkbox" '="">
//     <label for="AMAZON_deltaPercent90-1657777039604">Amazon: 90 days drop %</label>
// </p>
// <p data-search="Amazon: 90 days OOS">
//     <input id="AMAZON_outOfStockPercentage90-1657777039604" data-col-id="AMAZON_outOfStockPercentage90" type="checkbox" '="">
//     <label for="AMAZON_outOfStockPercentage90-1657777039604">Amazon: 90 days OOS</label>
// </p>
// <p data-search="Amazon: Availability of the Amazon offer">
//     <input id="availabilityAmazon-1657777039604" data-col-id="availabilityAmazon" type="checkbox" '="">
//     <label for="availabilityAmazon-1657777039604">Amazon: Availability of the Amazon offer</label>
// </p>
// <p data-search="Amazon: Drop % since last visit">
//     <input id="AMAZON_deltaPercentCustom-1657777039604" data-col-id="AMAZON_deltaPercentCustom" type="checkbox" '="">
//     <label for="AMAZON_deltaPercentCustom-1657777039604">Amazon: Drop % since last visit</label>
// </p>
// <p data-search="Amazon: Highest">
//     <input id="AMAZON_highest-1657777039604" data-col-id="AMAZON_highest" type="checkbox" '="">
//     <label for="AMAZON_highest-1657777039604">Amazon: Highest</label>
// </p>
// <p data-search="Amazon: Last visit">
//     <input id="AMAZON_atIntervalStart-1657777039604" data-col-id="AMAZON_atIntervalStart" type="checkbox" '="">
//     <label for="AMAZON_atIntervalStart-1657777039604">Amazon: Last visit</label>
// </p>
// <p data-search="Amazon: Lowest">
//     <input id="AMAZON_lowest-1657777039604" data-col-id="AMAZON_lowest" type="checkbox" '="">
//     <label for="AMAZON_lowest-1657777039604">Amazon: Lowest</label>
// </p>
// <p data-search="Amazon: Stock">
//     <input id="stockAmazon-1657777039604" data-col-id="stockAmazon" type="checkbox" '="">
//     <label for="stockAmazon-1657777039604">Amazon: Stock</label>
// </p>
// <p data-search="Amazon: 目前">
//     <input id="AMAZON_current-1657777039604" data-col-id="AMAZON_current" type="checkbox" '="">
//     <label for="AMAZON_current-1657777039604">Amazon: 目前</label>
// </p>
// <p data-search="Amazon: 自上次访问后的价格下降">
//     <input id="AMAZON_deltaCustom-1657777039604" data-col-id="AMAZON_deltaCustom" type="checkbox" '="">
//     <label for="AMAZON_deltaCustom-1657777039604">Amazon: 自上次访问后的价格下降</label>
// </p>
// <p data-search="ASIN">
//     <input id="asin-1657777039604" data-col-id="asin" type="checkbox" checked="checked" disabled="disabled" '="">
//     <label for="asin-1657777039604" class="disabled">ASIN</label>
// </p>
// <p data-search="Author">
//     <input id="author-1657777039604" data-col-id="author" type="checkbox" '="">
//     <label for="author-1657777039604">Author</label>
// </p>
// <p data-search="Binding">
//     <input id="binding-1657777039604" data-col-id="binding" type="checkbox" '="">
//     <label for="binding-1657777039604">Binding</label>
// </p>
// <p data-search="Brand">
//     <input id="brand-1657777039604" data-col-id="brand" type="checkbox" checked="checked" '="">
//     <label for="brand-1657777039604">Brand</label>
// </p>
// <p data-search="Buy Box: Is FBA">
//     <input id="buyBoxIsFBA-1657777039604" data-col-id="buyBoxIsFBA" type="checkbox" checked="checked" '="">
//     <label for="buyBoxIsFBA-1657777039604">Buy Box: Is FBA</label>
// </p>
// <p data-search="Buy Box Seller">
//     <input id="buyBoxSellerIdHistory-1657777039604" data-col-id="buyBoxSellerIdHistory" type="checkbox" checked="checked" '="">
//     <label for="buyBoxSellerIdHistory-1657777039604">Buy Box Seller</label>
// </p>
// <p data-search="Buy Box: Unqualified">
//     <input id="buyBoxIsUnqualified-1657777039604" data-col-id="buyBoxIsUnqualified" type="checkbox" '="">
//     <label for="buyBoxIsUnqualified-1657777039604">Buy Box: Unqualified</label>
// </p>
// <p data-search="Color">
//     <input id="color-1657777039604" data-col-id="color" type="checkbox" '="">
//     <label for="color-1657777039604">Color</label>
// </p>
// <p data-search="Count of retrieved live offers: New, FBA">
//     <input id="offerCountFBA-1657777039604" data-col-id="offerCountFBA" type="checkbox" '="">
//     <label for="offerCountFBA-1657777039604">Count of retrieved live offers: New, FBA</label>
// </p>
// <p data-search="Count of retrieved live offers: New, FBM">
//     <input id="offerCountFBM-1657777039604" data-col-id="offerCountFBM" type="checkbox" '="">
//     <label for="offerCountFBM-1657777039604">Count of retrieved live offers: New, FBM</label>
// </p>
// <p data-search="eBay New 🚚: 180 days avg.">
//     <input id="EBAY_NEW_SHIPPING_avg180-1657777039604" data-col-id="EBAY_NEW_SHIPPING_avg180" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_avg180-1657777039604">eBay New 🚚: 180 days avg.</label>
// </p>
// <p data-search="eBay New 🚚: 30 days avg.">
//     <input id="EBAY_NEW_SHIPPING_avg30-1657777039604" data-col-id="EBAY_NEW_SHIPPING_avg30" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_avg30-1657777039604">eBay New 🚚: 30 days avg.</label>
// </p>
// <p data-search="eBay New 🚚: 30 days drop %">
//     <input id="EBAY_NEW_SHIPPING_deltaPercent30-1657777039604" data-col-id="EBAY_NEW_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_deltaPercent30-1657777039604">eBay New 🚚: 30 days drop %</label>
// </p>
// <p data-search="eBay New 🚚: 90 days avg.">
//     <input id="EBAY_NEW_SHIPPING_avg90-1657777039604" data-col-id="EBAY_NEW_SHIPPING_avg90" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_avg90-1657777039604">eBay New 🚚: 90 days avg.</label>
// </p>
// <p data-search="eBay New 🚚: 90 days drop %">
//     <input id="EBAY_NEW_SHIPPING_deltaPercent90-1657777039604" data-col-id="EBAY_NEW_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_deltaPercent90-1657777039604">eBay New 🚚: 90 days drop %</label>
// </p>
// <p data-search="eBay New 🚚: Drop % since last visit">
//     <input id="EBAY_NEW_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="EBAY_NEW_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_deltaPercentCustom-1657777039604">eBay New 🚚: Drop % since last visit</label>
// </p>
// <p data-search="eBay New 🚚: Highest">
//     <input id="EBAY_NEW_SHIPPING_highest-1657777039604" data-col-id="EBAY_NEW_SHIPPING_highest" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_highest-1657777039604">eBay New 🚚: Highest</label>
// </p>
// <p data-search="eBay New 🚚: Last visit">
//     <input id="EBAY_NEW_SHIPPING_atIntervalStart-1657777039604" data-col-id="EBAY_NEW_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_atIntervalStart-1657777039604">eBay New 🚚: Last visit</label>
// </p>
// <p data-search="eBay New 🚚: Lowest">
//     <input id="EBAY_NEW_SHIPPING_lowest-1657777039604" data-col-id="EBAY_NEW_SHIPPING_lowest" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_lowest-1657777039604">eBay New 🚚: Lowest</label>
// </p>
// <p data-search="eBay New 🚚: 目前">
//     <input id="EBAY_NEW_SHIPPING_current-1657777039604" data-col-id="EBAY_NEW_SHIPPING_current" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_current-1657777039604">eBay New 🚚: 目前</label>
// </p>
// <p data-search="eBay New 🚚: 自上次访问后的价格下降">
//     <input id="EBAY_NEW_SHIPPING_deltaCustom-1657777039604" data-col-id="EBAY_NEW_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="EBAY_NEW_SHIPPING_deltaCustom-1657777039604">eBay New 🚚: 自上次访问后的价格下降</label>
// </p>
// <p data-search="eBay Used 🚚: 180 days avg.">
//     <input id="EBAY_USED_SHIPPING_avg180-1657777039604" data-col-id="EBAY_USED_SHIPPING_avg180" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_avg180-1657777039604">eBay Used 🚚: 180 days avg.</label>
// </p>
// <p data-search="eBay Used 🚚: 30 days avg.">
//     <input id="EBAY_USED_SHIPPING_avg30-1657777039604" data-col-id="EBAY_USED_SHIPPING_avg30" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_avg30-1657777039604">eBay Used 🚚: 30 days avg.</label>
// </p>
// <p data-search="eBay Used 🚚: 30 days drop %">
//     <input id="EBAY_USED_SHIPPING_deltaPercent30-1657777039604" data-col-id="EBAY_USED_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_deltaPercent30-1657777039604">eBay Used 🚚: 30 days drop %</label>
// </p>
// <p data-search="eBay Used 🚚: 90 days avg.">
//     <input id="EBAY_USED_SHIPPING_avg90-1657777039604" data-col-id="EBAY_USED_SHIPPING_avg90" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_avg90-1657777039604">eBay Used 🚚: 90 days avg.</label>
// </p>
// <p data-search="eBay Used 🚚: 90 days drop %">
//     <input id="EBAY_USED_SHIPPING_deltaPercent90-1657777039604" data-col-id="EBAY_USED_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_deltaPercent90-1657777039604">eBay Used 🚚: 90 days drop %</label>
// </p>
// <p data-search="eBay Used 🚚: Drop % since last visit">
//     <input id="EBAY_USED_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="EBAY_USED_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_deltaPercentCustom-1657777039604">eBay Used 🚚: Drop % since last visit</label>
// </p>
// <p data-search="eBay Used 🚚: Highest">
//     <input id="EBAY_USED_SHIPPING_highest-1657777039604" data-col-id="EBAY_USED_SHIPPING_highest" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_highest-1657777039604">eBay Used 🚚: Highest</label>
// </p>
// <p data-search="eBay Used 🚚: Last visit">
//     <input id="EBAY_USED_SHIPPING_atIntervalStart-1657777039604" data-col-id="EBAY_USED_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_atIntervalStart-1657777039604">eBay Used 🚚: Last visit</label>
// </p>
// <p data-search="eBay Used 🚚: Lowest">
//     <input id="EBAY_USED_SHIPPING_lowest-1657777039604" data-col-id="EBAY_USED_SHIPPING_lowest" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_lowest-1657777039604">eBay Used 🚚: Lowest</label>
// </p>
// <p data-search="eBay Used 🚚: 目前">
//     <input id="EBAY_USED_SHIPPING_current-1657777039604" data-col-id="EBAY_USED_SHIPPING_current" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_current-1657777039604">eBay Used 🚚: 目前</label>
// </p>
// <p data-search="eBay Used 🚚: 自上次访问后的价格下降">
//     <input id="EBAY_USED_SHIPPING_deltaCustom-1657777039604" data-col-id="EBAY_USED_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="EBAY_USED_SHIPPING_deltaCustom-1657777039604">eBay Used 🚚: 自上次访问后的价格下降</label>
// </p>
// <p data-search="Edition">
//     <input id="edition-1657777039604" data-col-id="edition" type="checkbox" '="">
//     <label for="edition-1657777039604">Edition</label>
// </p>
// <p data-search="FBA Pick&amp;Pack Fee">
//     <input id="fbaFees-1657777039604" data-col-id="fbaFees" type="checkbox" checked="checked" '="">
//     <label for="fbaFees-1657777039604">FBA Pick&amp;Pack Fee</label>
// </p>
// <p data-search="Format">
//     <input id="format-1657777039604" data-col-id="format" type="checkbox" '="">
//     <label for="format-1657777039604">Format</label>
// </p>
// <p data-search="Freq. Bought Together">
//     <input id="frequentlyBoughtTogether-1657777039604" data-col-id="frequentlyBoughtTogether" type="checkbox" '="">
//     <label for="frequentlyBoughtTogether-1657777039604">Freq. Bought Together</label>
// </p>
// <p data-search="Image">
//     <input id="imagesCSV-1657777039604" data-col-id="imagesCSV" type="checkbox" checked="checked" '="">
//     <label for="imagesCSV-1657777039604">Image</label>
// </p>
// <p data-search="Item: Dimension">
//     <input id="itemDimension-1657777039604" data-col-id="itemDimension" type="checkbox" checked="checked" '="">
//     <label for="itemDimension-1657777039604">Item: Dimension</label>
// </p>
// <p data-search="Item: Height">
//     <input id="itemHeight-1657777039604" data-col-id="itemHeight" type="checkbox" '="">
//     <label for="itemHeight-1657777039604">Item: Height</label>
// </p>
// <p data-search="Item: Length">
//     <input id="itemLength-1657777039604" data-col-id="itemLength" type="checkbox" '="">
//     <label for="itemLength-1657777039604">Item: Length</label>
// </p>
// <p data-search="Item: Weight">
//     <input id="itemWeight-1657777039604" data-col-id="itemWeight" type="checkbox" checked="checked" '="">
//     <label for="itemWeight-1657777039604">Item: Weight</label>
// </p>
// <p data-search="Item: Width">
//     <input id="itemWidth-1657777039604" data-col-id="itemWidth" type="checkbox" '="">
//     <label for="itemWidth-1657777039604">Item: Width</label>
// </p>
// <p data-search="Languages">
//     <input id="languages-1657777039604" data-col-id="languages" type="checkbox" '="">
//     <label for="languages-1657777039604">Languages</label>
// </p>
// <p data-search="Last Offer Update">
//     <input id="lastOffersUpdate-1657777039604" data-col-id="lastOffersUpdate" type="checkbox" '="">
//     <label for="lastOffersUpdate-1657777039604">Last Offer Update</label>
// </p>
// <p data-search="Last Price Change">
//     <input id="lastPriceChange-1657777039604" data-col-id="lastPriceChange" type="checkbox" '="">
//     <label for="lastPriceChange-1657777039604">Last Price Change</label>
// </p>
// <p data-search="Last Update">
//     <input id="lastUpdate-1657777039604" data-col-id="lastUpdate" type="checkbox" '="">
//     <label for="lastUpdate-1657777039604">Last Update</label>
// </p>
// <p data-search="Listed since">
//     <input id="listedSince-1657777039604" data-col-id="listedSince" type="checkbox" checked="checked" '="">
//     <label for="listedSince-1657777039604">Listed since</label>
// </p>
// <p data-search="Lowest FBA Seller">
//     <input id="sellerIdsLowestFBA-1657777039604" data-col-id="sellerIdsLowestFBA" type="checkbox" '="">
//     <label for="sellerIdsLowestFBA-1657777039604">Lowest FBA Seller</label>
// </p>
// <p data-search="Lowest FBM Seller">
//     <input id="sellerIdsLowestFBM-1657777039604" data-col-id="sellerIdsLowestFBM" type="checkbox" '="">
//     <label for="sellerIdsLowestFBM-1657777039604">Lowest FBM Seller</label>
// </p>
// <p data-search="Manufacturer">
//     <input id="manufacturer-1657777039604" data-col-id="manufacturer" type="checkbox" '="">
//     <label for="manufacturer-1657777039604">Manufacturer</label>
// </p>
// <p data-search="MAP restriction">
//     <input id="newPriceIsMAP-1657777039604" data-col-id="newPriceIsMAP" type="checkbox" '="">
//     <label for="newPriceIsMAP-1657777039604">MAP restriction</label>
// </p>
// <p data-search="Model">
//     <input id="model-1657777039604" data-col-id="model" type="checkbox" '="">
//     <label for="model-1657777039604">Model</label>
// </p>
// <p data-search="Number of Items">
//     <input id="numberOfItems-1657777039604" data-col-id="numberOfItems" type="checkbox" '="">
//     <label for="numberOfItems-1657777039604">Number of Items</label>
// </p>
// <p data-search="Number of Pages">
//     <input id="numberOfPages-1657777039604" data-col-id="numberOfPages" type="checkbox" '="">
//     <label for="numberOfPages-1657777039604">Number of Pages</label>
// </p>
// <p data-search="One Time Coupon: Absolute">
//     <input id="couponOneTimeAbsolute-1657777039604" data-col-id="couponOneTimeAbsolute" type="checkbox" '="">
//     <label for="couponOneTimeAbsolute-1657777039604">One Time Coupon: Absolute</label>
// </p>
// <p data-search="One Time Coupon: Percentage">
//     <input id="couponOneTimePercent-1657777039604" data-col-id="couponOneTimePercent" type="checkbox" '="">
//     <label for="couponOneTimePercent-1657777039604">One Time Coupon: Percentage</label>
// </p>
// <p data-search="Package: Dimension">
//     <input id="packageDimension-1657777039604" data-col-id="packageDimension" type="checkbox" checked="checked" '="">
//     <label for="packageDimension-1657777039604">Package: Dimension</label>
// </p>
// <p data-search="Package: Height">
//     <input id="packageHeight-1657777039604" data-col-id="packageHeight" type="checkbox" '="">
//     <label for="packageHeight-1657777039604">Package: Height</label>
// </p>
// <p data-search="Package: Length">
//     <input id="packageLength-1657777039604" data-col-id="packageLength" type="checkbox" '="">
//     <label for="packageLength-1657777039604">Package: Length</label>
// </p>
// <p data-search="Package: Quantity">
//     <input id="packageQuantity-1657777039604" data-col-id="packageQuantity" type="checkbox" '="">
//     <label for="packageQuantity-1657777039604">Package: Quantity</label>
// </p>
// <p data-search="Package: Weight">
//     <input id="packageWeight-1657777039604" data-col-id="packageWeight" type="checkbox" checked="checked" '="">
//     <label for="packageWeight-1657777039604">Package: Weight</label>
// </p>
// <p data-search="Package: Width">
//     <input id="packageWidth-1657777039604" data-col-id="packageWidth" type="checkbox" '="">
//     <label for="packageWidth-1657777039604">Package: Width</label>
// </p>
// <p data-search="Parent ASIN">
//     <input id="parentAsin-1657777039604" data-col-id="parentAsin" type="checkbox" '="">
//     <label for="parentAsin-1657777039604">Parent ASIN</label>
// </p>
// <p data-search="Prime Eligible (Buy Box)">
//     <input id="isEligibleForSuperSaverShipping-1657777039604" data-col-id="isEligibleForSuperSaverShipping" type="checkbox" '="">
//     <label for="isEligibleForSuperSaverShipping-1657777039604">Prime Eligible (Buy Box)</label>
// </p>
// <p data-search="Product Codes: EAN">
//     <input id="eanList-1657777039604" data-col-id="eanList" type="checkbox" '="">
//     <label for="eanList-1657777039604">Product Codes: EAN</label>
// </p>
// <p data-search="Product Codes: PartNumber">
//     <input id="partNumber-1657777039604" data-col-id="partNumber" type="checkbox" '="">
//     <label for="partNumber-1657777039604">Product Codes: PartNumber</label>
// </p>
// <p data-search="Product Codes: UPC">
//     <input id="upcList-1657777039604" data-col-id="upcList" type="checkbox" '="">
//     <label for="upcList-1657777039604">Product Codes: UPC</label>
// </p>
// <p data-search="Product Group">
//     <input id="productGroup-1657777039604" data-col-id="productGroup" type="checkbox" '="">
//     <label for="productGroup-1657777039604">Product Group</label>
// </p>
// <p data-search="Publication Date">
//     <input id="publicationDate-1657777039604" data-col-id="publicationDate" type="checkbox" '="">
//     <label for="publicationDate-1657777039604">Publication Date</label>
// </p>
// <p data-search="Ratings - Format Specific">
//     <input id="reviews.ratingCount-1657777039604" data-col-id="reviews.ratingCount" type="checkbox" '="">
//     <label for="reviews.ratingCount-1657777039604">Ratings - Format Specific</label>
// </p>
// <p data-search="Release Date">
//     <input id="releaseDate-1657777039604" data-col-id="releaseDate" type="checkbox" '="">
//     <label for="releaseDate-1657777039604">Release Date</label>
// </p>
// <p data-search="Rental: 180 days avg.">
//     <input id="RENT_avg180-1657777039604" data-col-id="RENT_avg180" type="checkbox" '="">
//     <label for="RENT_avg180-1657777039604">Rental: 180 days avg.</label>
// </p>
// <p data-search="Rental: 30 days avg.">
//     <input id="RENT_avg30-1657777039604" data-col-id="RENT_avg30" type="checkbox" '="">
//     <label for="RENT_avg30-1657777039604">Rental: 30 days avg.</label>
// </p>
// <p data-search="Rental: 30 days drop %">
//     <input id="RENT_deltaPercent30-1657777039604" data-col-id="RENT_deltaPercent30" type="checkbox" '="">
//     <label for="RENT_deltaPercent30-1657777039604">Rental: 30 days drop %</label>
// </p>
// <p data-search="Rental: 90 days avg.">
//     <input id="RENT_avg90-1657777039604" data-col-id="RENT_avg90" type="checkbox" '="">
//     <label for="RENT_avg90-1657777039604">Rental: 90 days avg.</label>
// </p>
// <p data-search="Rental: 90 days drop %">
//     <input id="RENT_deltaPercent90-1657777039604" data-col-id="RENT_deltaPercent90" type="checkbox" '="">
//     <label for="RENT_deltaPercent90-1657777039604">Rental: 90 days drop %</label>
// </p>
// <p data-search="Rental: Drop % since last visit">
//     <input id="RENT_deltaPercentCustom-1657777039604" data-col-id="RENT_deltaPercentCustom" type="checkbox" '="">
//     <label for="RENT_deltaPercentCustom-1657777039604">Rental: Drop % since last visit</label>
// </p>
// <p data-search="Rental: Highest">
//     <input id="RENT_highest-1657777039604" data-col-id="RENT_highest" type="checkbox" '="">
//     <label for="RENT_highest-1657777039604">Rental: Highest</label>
// </p>
// <p data-search="Rental: Last visit">
//     <input id="RENT_atIntervalStart-1657777039604" data-col-id="RENT_atIntervalStart" type="checkbox" '="">
//     <label for="RENT_atIntervalStart-1657777039604">Rental: Last visit</label>
// </p>
// <p data-search="Rental: Lowest">
//     <input id="RENT_lowest-1657777039604" data-col-id="RENT_lowest" type="checkbox" '="">
//     <label for="RENT_lowest-1657777039604">Rental: Lowest</label>
// </p>
// <p data-search="Rental: 目前">
//     <input id="RENT_current-1657777039604" data-col-id="RENT_current" type="checkbox" '="">
//     <label for="RENT_current-1657777039604">Rental: 目前</label>
// </p>
// <p data-search="Rental: 自上次访问后的价格下降">
//     <input id="RENT_deltaCustom-1657777039604" data-col-id="RENT_deltaCustom" type="checkbox" '="">
//     <label for="RENT_deltaCustom-1657777039604">Rental: 自上次访问后的价格下降</label>
// </p>
// <p data-search="Review Count - Format Specific">
//     <input id="reviews.reviewCount-1657777039604" data-col-id="reviews.reviewCount" type="checkbox" '="">
//     <label for="reviews.reviewCount-1657777039604">Review Count - Format Specific</label>
// </p>
// <p data-search="Reviews: 评价数量">
//     <input id="COUNT_REVIEWS_current-1657777039604" data-col-id="COUNT_REVIEWS_current" type="checkbox" checked="checked" '="">
//     <label for="COUNT_REVIEWS_current-1657777039604">Reviews: 评价数量</label>
// </p>
// <p data-search="Reviews: 评价数量 - 180 days avg.">
//     <input id="COUNT_REVIEWS_avg180-1657777039604" data-col-id="COUNT_REVIEWS_avg180" type="checkbox" '="">
//     <label for="COUNT_REVIEWS_avg180-1657777039604">Reviews: 评价数量 - 180 days avg.</label>
// </p>
// <p data-search="Reviews: 评价数量 - 30 days avg.">
//     <input id="COUNT_REVIEWS_avg30-1657777039604" data-col-id="COUNT_REVIEWS_avg30" type="checkbox" '="">
//     <label for="COUNT_REVIEWS_avg30-1657777039604">Reviews: 评价数量 - 30 days avg.</label>
// </p>
// <p data-search="Reviews: 评价数量 - 90 days avg.">
//     <input id="COUNT_REVIEWS_avg90-1657777039604" data-col-id="COUNT_REVIEWS_avg90" type="checkbox" '="">
//     <label for="COUNT_REVIEWS_avg90-1657777039604">Reviews: 评价数量 - 90 days avg.</label>
// </p>
// <p data-search="Reviews: 评价数量 - 90 days drop %">
//     <input id="COUNT_REVIEWS_deltaPercent90-1657777039604" data-col-id="COUNT_REVIEWS_deltaPercent90" type="checkbox" '="">
//     <label for="COUNT_REVIEWS_deltaPercent90-1657777039604">Reviews: 评价数量 - 90 days drop %</label>
// </p>
// <p data-search="Reviews: 评分">
//     <input id="RATING_current-1657777039604" data-col-id="RATING_current" type="checkbox" checked="checked" '="">
//     <label for="RATING_current-1657777039604">Reviews: 评分</label>
// </p>
// <p data-search="Size">
//     <input id="size-1657777039604" data-col-id="size" type="checkbox" '="">
//     <label for="size-1657777039604">Size</label>
// </p>
// <p data-search="Subscribe and Save">
//     <input id="isSNS-1657777039604" data-col-id="isSNS" type="checkbox" '="">
//     <label for="isSNS-1657777039604">Subscribe and Save</label>
// </p>
// <p data-search="Subscribe and Save Coupon: Percentage">
//     <input id="couponSNSPercent-1657777039604" data-col-id="couponSNSPercent" type="checkbox" '="">
//     <label for="couponSNSPercent-1657777039604">Subscribe and Save Coupon: Percentage</label>
// </p>
// <p data-search="Title">
//     <input id="title-1657777039604" data-col-id="title" type="checkbox" checked="checked" disabled="disabled" '="">
//     <label for="title-1657777039604" class="disabled">Title</label>
// </p>
// <p data-search="Tracking since">
//     <input id="trackingSince-1657777039604" data-col-id="trackingSince" type="checkbox" checked="checked" '="">
//     <label for="trackingSince-1657777039604">Tracking since</label>
// </p>
// <p data-search="Trade-In: 180 days avg.">
//     <input id="TRADE_IN_avg180-1657777039604" data-col-id="TRADE_IN_avg180" type="checkbox" '="">
//     <label for="TRADE_IN_avg180-1657777039604">Trade-In: 180 days avg.</label>
// </p>
// <p data-search="Trade-In: 30 days avg.">
//     <input id="TRADE_IN_avg30-1657777039604" data-col-id="TRADE_IN_avg30" type="checkbox" '="">
//     <label for="TRADE_IN_avg30-1657777039604">Trade-In: 30 days avg.</label>
// </p>
// <p data-search="Trade-In: 30 days drop %">
//     <input id="TRADE_IN_deltaPercent30-1657777039604" data-col-id="TRADE_IN_deltaPercent30" type="checkbox" '="">
//     <label for="TRADE_IN_deltaPercent30-1657777039604">Trade-In: 30 days drop %</label>
// </p>
// <p data-search="Trade-In: 90 days avg.">
//     <input id="TRADE_IN_avg90-1657777039604" data-col-id="TRADE_IN_avg90" type="checkbox" '="">
//     <label for="TRADE_IN_avg90-1657777039604">Trade-In: 90 days avg.</label>
// </p>
// <p data-search="Trade-In: 90 days drop %">
//     <input id="TRADE_IN_deltaPercent90-1657777039604" data-col-id="TRADE_IN_deltaPercent90" type="checkbox" '="">
//     <label for="TRADE_IN_deltaPercent90-1657777039604">Trade-In: 90 days drop %</label>
// </p>
// <p data-search="Trade-In: Drop % since last visit">
//     <input id="TRADE_IN_deltaPercentCustom-1657777039604" data-col-id="TRADE_IN_deltaPercentCustom" type="checkbox" '="">
//     <label for="TRADE_IN_deltaPercentCustom-1657777039604">Trade-In: Drop % since last visit</label>
// </p>
// <p data-search="Trade-In Eligible">
//     <input id="isEligibleForTradeIn-1657777039604" data-col-id="isEligibleForTradeIn" type="checkbox" '="">
//     <label for="isEligibleForTradeIn-1657777039604">Trade-In Eligible</label>
// </p>
// <p data-search="Trade-In: Highest">
//     <input id="TRADE_IN_highest-1657777039604" data-col-id="TRADE_IN_highest" type="checkbox" '="">
//     <label for="TRADE_IN_highest-1657777039604">Trade-In: Highest</label>
// </p>
// <p data-search="Trade-In: Last visit">
//     <input id="TRADE_IN_atIntervalStart-1657777039604" data-col-id="TRADE_IN_atIntervalStart" type="checkbox" '="">
//     <label for="TRADE_IN_atIntervalStart-1657777039604">Trade-In: Last visit</label>
// </p>
// <p data-search="Trade-In: Lowest">
//     <input id="TRADE_IN_lowest-1657777039604" data-col-id="TRADE_IN_lowest" type="checkbox" '="">
//     <label for="TRADE_IN_lowest-1657777039604">Trade-In: Lowest</label>
// </p>
// <p data-search="Trade-In: 目前">
//     <input id="TRADE_IN_current-1657777039604" data-col-id="TRADE_IN_current" type="checkbox" '="">
//     <label for="TRADE_IN_current-1657777039604">Trade-In: 目前</label>
// </p>
// <p data-search="Trade-In: 自上次访问后的价格下降">
//     <input id="TRADE_IN_deltaCustom-1657777039604" data-col-id="TRADE_IN_deltaCustom" type="checkbox" '="">
//     <label for="TRADE_IN_deltaCustom-1657777039604">Trade-In: 自上次访问后的价格下降</label>
// </p>
// <p data-search="URL: Amazon">
//     <input id="urlAmazon-1657777039604" data-col-id="urlAmazon" type="checkbox" checked="checked" '="">
//     <label for="urlAmazon-1657777039604">URL: Amazon</label>
// </p>
// <p data-search="URL: Keepa">
//     <input id="urlKeepa-1657777039604" data-col-id="urlKeepa" type="checkbox" '="">
//     <label for="urlKeepa-1657777039604">URL: Keepa</label>
// </p>
// <p data-search="Variation ASINs">
//     <input id="variationCSV-1657777039604" data-col-id="variationCSV" type="checkbox" checked="checked" '="">
//     <label for="variationCSV-1657777039604">Variation ASINs</label>
// </p>
// <p data-search="Variation Attributes">
//     <input id="variationAttributes-1657777039604" data-col-id="variationAttributes" type="checkbox" '="">
//     <label for="variationAttributes-1657777039604">Variation Attributes</label>
// </p>
// <p data-search="全新品: 180 days avg.">
//     <input id="NEW_avg180-1657777039604" data-col-id="NEW_avg180" type="checkbox" '="">
//     <label for="NEW_avg180-1657777039604">全新品: 180 days avg.</label>
// </p>
// <p data-search="全新品: 30 days avg.">
//     <input id="NEW_avg30-1657777039604" data-col-id="NEW_avg30" type="checkbox" '="">
//     <label for="NEW_avg30-1657777039604">全新品: 30 days avg.</label>
// </p>
// <p data-search="全新品: 30 days drop %">
//     <input id="NEW_deltaPercent30-1657777039604" data-col-id="NEW_deltaPercent30" type="checkbox" '="">
//     <label for="NEW_deltaPercent30-1657777039604">全新品: 30 days drop %</label>
// </p>
// <p data-search="全新品: 90 days avg.">
//     <input id="NEW_avg90-1657777039604" data-col-id="NEW_avg90" type="checkbox" '="">
//     <label for="NEW_avg90-1657777039604">全新品: 90 days avg.</label>
// </p>
// <p data-search="全新品: 90 days drop %">
//     <input id="NEW_deltaPercent90-1657777039604" data-col-id="NEW_deltaPercent90" type="checkbox" '="">
//     <label for="NEW_deltaPercent90-1657777039604">全新品: 90 days drop %</label>
// </p>
// <p data-search="全新品: 90 days OOS">
//     <input id="NEW_outOfStockPercentage90-1657777039604" data-col-id="NEW_outOfStockPercentage90" type="checkbox" '="">
//     <label for="NEW_outOfStockPercentage90-1657777039604">全新品: 90 days OOS</label>
// </p>
// <p data-search="全新品: Drop % since last visit">
//     <input id="NEW_deltaPercentCustom-1657777039604" data-col-id="NEW_deltaPercentCustom" type="checkbox" '="">
//     <label for="NEW_deltaPercentCustom-1657777039604">全新品: Drop % since last visit</label>
// </p>
// <p data-search="全新品: Highest">
//     <input id="NEW_highest-1657777039604" data-col-id="NEW_highest" type="checkbox" '="">
//     <label for="NEW_highest-1657777039604">全新品: Highest</label>
// </p>
// <p data-search="全新品: Last visit">
//     <input id="NEW_atIntervalStart-1657777039604" data-col-id="NEW_atIntervalStart" type="checkbox" '="">
//     <label for="NEW_atIntervalStart-1657777039604">全新品: Last visit</label>
// </p>
// <p data-search="全新品: Lowest">
//     <input id="NEW_lowest-1657777039604" data-col-id="NEW_lowest" type="checkbox" '="">
//     <label for="NEW_lowest-1657777039604">全新品: Lowest</label>
// </p>
// <p data-search="全新品: 目前">
//     <input id="NEW_current-1657777039604" data-col-id="NEW_current" type="checkbox" '="">
//     <label for="NEW_current-1657777039604">全新品: 目前</label>
// </p>
// <p data-search="全新品: 自上次访问后的价格下降">
//     <input id="NEW_deltaCustom-1657777039604" data-col-id="NEW_deltaCustom" type="checkbox" '="">
//     <label for="NEW_deltaCustom-1657777039604">全新品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="全新品计数: 180 days avg.">
//     <input id="COUNT_NEW_avg180-1657777039604" data-col-id="COUNT_NEW_avg180" type="checkbox" '="">
//     <label for="COUNT_NEW_avg180-1657777039604">全新品计数: 180 days avg.</label>
// </p>
// <p data-search="全新品计数: 30 days avg.">
//     <input id="COUNT_NEW_avg30-1657777039604" data-col-id="COUNT_NEW_avg30" type="checkbox" '="">
//     <label for="COUNT_NEW_avg30-1657777039604">全新品计数: 30 days avg.</label>
// </p>
// <p data-search="全新品计数: 90 days avg.">
//     <input id="COUNT_NEW_avg90-1657777039604" data-col-id="COUNT_NEW_avg90" type="checkbox" '="">
//     <label for="COUNT_NEW_avg90-1657777039604">全新品计数: 90 days avg.</label>
// </p>
// <p data-search="全新品计数: 90 days drop %">
//     <input id="COUNT_NEW_deltaPercent90-1657777039604" data-col-id="COUNT_NEW_deltaPercent90" type="checkbox" '="">
//     <label for="COUNT_NEW_deltaPercent90-1657777039604">全新品计数: 90 days drop %</label>
// </p>
// <p data-search="全新品计数: 目前">
//     <input id="COUNT_NEW_current-1657777039604" data-col-id="COUNT_NEW_current" type="checkbox" '="">
//     <label for="COUNT_NEW_current-1657777039604">全新品计数: 目前</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 180 days avg.">
//     <input id="NEW_FBA_avg180-1657777039604" data-col-id="NEW_FBA_avg180" type="checkbox" '="">
//     <label for="NEW_FBA_avg180-1657777039604">全新品，第三方由亚马逊负责发货: 180 days avg.</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 30 days avg.">
//     <input id="NEW_FBA_avg30-1657777039604" data-col-id="NEW_FBA_avg30" type="checkbox" '="">
//     <label for="NEW_FBA_avg30-1657777039604">全新品，第三方由亚马逊负责发货: 30 days avg.</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 30 days drop %">
//     <input id="NEW_FBA_deltaPercent30-1657777039604" data-col-id="NEW_FBA_deltaPercent30" type="checkbox" '="">
//     <label for="NEW_FBA_deltaPercent30-1657777039604">全新品，第三方由亚马逊负责发货: 30 days drop %</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 90 days avg.">
//     <input id="NEW_FBA_avg90-1657777039604" data-col-id="NEW_FBA_avg90" type="checkbox" '="">
//     <label for="NEW_FBA_avg90-1657777039604">全新品，第三方由亚马逊负责发货: 90 days avg.</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 90 days drop %">
//     <input id="NEW_FBA_deltaPercent90-1657777039604" data-col-id="NEW_FBA_deltaPercent90" type="checkbox" '="">
//     <label for="NEW_FBA_deltaPercent90-1657777039604">全新品，第三方由亚马逊负责发货: 90 days drop %</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: Drop % since last visit">
//     <input id="NEW_FBA_deltaPercentCustom-1657777039604" data-col-id="NEW_FBA_deltaPercentCustom" type="checkbox" '="">
//     <label for="NEW_FBA_deltaPercentCustom-1657777039604">全新品，第三方由亚马逊负责发货: Drop % since last visit</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: Highest">
//     <input id="NEW_FBA_highest-1657777039604" data-col-id="NEW_FBA_highest" type="checkbox" '="">
//     <label for="NEW_FBA_highest-1657777039604">全新品，第三方由亚马逊负责发货: Highest</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: Last visit">
//     <input id="NEW_FBA_atIntervalStart-1657777039604" data-col-id="NEW_FBA_atIntervalStart" type="checkbox" '="">
//     <label for="NEW_FBA_atIntervalStart-1657777039604">全新品，第三方由亚马逊负责发货: Last visit</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: Lowest">
//     <input id="NEW_FBA_lowest-1657777039604" data-col-id="NEW_FBA_lowest" type="checkbox" '="">
//     <label for="NEW_FBA_lowest-1657777039604">全新品，第三方由亚马逊负责发货: Lowest</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 目前">
//     <input id="NEW_FBA_current-1657777039604" data-col-id="NEW_FBA_current" type="checkbox" '="">
//     <label for="NEW_FBA_current-1657777039604">全新品，第三方由亚马逊负责发货: 目前</label>
// </p>
// <p data-search="全新品，第三方由亚马逊负责发货: 自上次访问后的价格下降">
//     <input id="NEW_FBA_deltaCustom-1657777039604" data-col-id="NEW_FBA_deltaCustom" type="checkbox" '="">
//     <label for="NEW_FBA_deltaCustom-1657777039604">全新品，第三方由亚马逊负责发货: 自上次访问后的价格下降</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 180 days avg.">
//     <input id="NEW_FBM_SHIPPING_avg180-1657777039604" data-col-id="NEW_FBM_SHIPPING_avg180" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_avg180-1657777039604">全新品，第三方由商家负责发货: 180 days avg.</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 30 days avg.">
//     <input id="NEW_FBM_SHIPPING_avg30-1657777039604" data-col-id="NEW_FBM_SHIPPING_avg30" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_avg30-1657777039604">全新品，第三方由商家负责发货: 30 days avg.</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 30 days drop %">
//     <input id="NEW_FBM_SHIPPING_deltaPercent30-1657777039604" data-col-id="NEW_FBM_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_deltaPercent30-1657777039604">全新品，第三方由商家负责发货: 30 days drop %</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 90 days avg.">
//     <input id="NEW_FBM_SHIPPING_avg90-1657777039604" data-col-id="NEW_FBM_SHIPPING_avg90" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_avg90-1657777039604">全新品，第三方由商家负责发货: 90 days avg.</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 90 days drop %">
//     <input id="NEW_FBM_SHIPPING_deltaPercent90-1657777039604" data-col-id="NEW_FBM_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_deltaPercent90-1657777039604">全新品，第三方由商家负责发货: 90 days drop %</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: Drop % since last visit">
//     <input id="NEW_FBM_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="NEW_FBM_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_deltaPercentCustom-1657777039604">全新品，第三方由商家负责发货: Drop % since last visit</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: Highest">
//     <input id="NEW_FBM_SHIPPING_highest-1657777039604" data-col-id="NEW_FBM_SHIPPING_highest" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_highest-1657777039604">全新品，第三方由商家负责发货: Highest</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: Last visit">
//     <input id="NEW_FBM_SHIPPING_atIntervalStart-1657777039604" data-col-id="NEW_FBM_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_atIntervalStart-1657777039604">全新品，第三方由商家负责发货: Last visit</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: Lowest">
//     <input id="NEW_FBM_SHIPPING_lowest-1657777039604" data-col-id="NEW_FBM_SHIPPING_lowest" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_lowest-1657777039604">全新品，第三方由商家负责发货: Lowest</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 目前">
//     <input id="NEW_FBM_SHIPPING_current-1657777039604" data-col-id="NEW_FBM_SHIPPING_current" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_current-1657777039604">全新品，第三方由商家负责发货: 目前</label>
// </p>
// <p data-search="全新品，第三方由商家负责发货: 自上次访问后的价格下降">
//     <input id="NEW_FBM_SHIPPING_deltaCustom-1657777039604" data-col-id="NEW_FBM_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="NEW_FBM_SHIPPING_deltaCustom-1657777039604">全新品，第三方由商家负责发货: 自上次访问后的价格下降</label>
// </p>
// <p data-search="分类: Launchpad">
//     <input id="launchpad-1657777039604" data-col-id="launchpad" type="checkbox" '="">
//     <label for="launchpad-1657777039604">分类: Launchpad</label>
// </p>
// <p data-search="分类: Root">
//     <input id="rootCategory-1657777039604" data-col-id="rootCategory" type="checkbox" checked="checked" '="">
//     <label for="rootCategory-1657777039604">分类: Root</label>
// </p>
// <p data-search="分类: Sub">
//     <input id="categories-1657777039604" data-col-id="categories" type="checkbox" '="">
//     <label for="categories-1657777039604">分类: Sub</label>
// </p>
// <p data-search="分类: Tree">
//     <input id="categoryTree-1657777039604" data-col-id="categoryTree" type="checkbox" checked="checked" '="">
//     <label for="categoryTree-1657777039604">分类: Tree</label>
// </p>
// <p data-search="列表价格: 180 days avg.">
//     <input id="LISTPRICE_avg180-1657777039604" data-col-id="LISTPRICE_avg180" type="checkbox" '="">
//     <label for="LISTPRICE_avg180-1657777039604">列表价格: 180 days avg.</label>
// </p>
// <p data-search="列表价格: 30 days avg.">
//     <input id="LISTPRICE_avg30-1657777039604" data-col-id="LISTPRICE_avg30" type="checkbox" '="">
//     <label for="LISTPRICE_avg30-1657777039604">列表价格: 30 days avg.</label>
// </p>
// <p data-search="列表价格: 30 days drop %">
//     <input id="LISTPRICE_deltaPercent30-1657777039604" data-col-id="LISTPRICE_deltaPercent30" type="checkbox" '="">
//     <label for="LISTPRICE_deltaPercent30-1657777039604">列表价格: 30 days drop %</label>
// </p>
// <p data-search="列表价格: 90 days avg.">
//     <input id="LISTPRICE_avg90-1657777039604" data-col-id="LISTPRICE_avg90" type="checkbox" '="">
//     <label for="LISTPRICE_avg90-1657777039604">列表价格: 90 days avg.</label>
// </p>
// <p data-search="列表价格: 90 days drop %">
//     <input id="LISTPRICE_deltaPercent90-1657777039604" data-col-id="LISTPRICE_deltaPercent90" type="checkbox" '="">
//     <label for="LISTPRICE_deltaPercent90-1657777039604">列表价格: 90 days drop %</label>
// </p>
// <p data-search="列表价格: Drop % since last visit">
//     <input id="LISTPRICE_deltaPercentCustom-1657777039604" data-col-id="LISTPRICE_deltaPercentCustom" type="checkbox" '="">
//     <label for="LISTPRICE_deltaPercentCustom-1657777039604">列表价格: Drop % since last visit</label>
// </p>
// <p data-search="列表价格: Highest">
//     <input id="LISTPRICE_highest-1657777039604" data-col-id="LISTPRICE_highest" type="checkbox" '="">
//     <label for="LISTPRICE_highest-1657777039604">列表价格: Highest</label>
// </p>
// <p data-search="列表价格: Last visit">
//     <input id="LISTPRICE_atIntervalStart-1657777039604" data-col-id="LISTPRICE_atIntervalStart" type="checkbox" '="">
//     <label for="LISTPRICE_atIntervalStart-1657777039604">列表价格: Last visit</label>
// </p>
// <p data-search="列表价格: Lowest">
//     <input id="LISTPRICE_lowest-1657777039604" data-col-id="LISTPRICE_lowest" type="checkbox" '="">
//     <label for="LISTPRICE_lowest-1657777039604">列表价格: Lowest</label>
// </p>
// <p data-search="列表价格: 目前">
//     <input id="LISTPRICE_current-1657777039604" data-col-id="LISTPRICE_current" type="checkbox" '="">
//     <label for="LISTPRICE_current-1657777039604">列表价格: 目前</label>
// </p>
// <p data-search="列表价格: 自上次访问后的价格下降">
//     <input id="LISTPRICE_deltaCustom-1657777039604" data-col-id="LISTPRICE_deltaCustom" type="checkbox" '="">
//     <label for="LISTPRICE_deltaCustom-1657777039604">列表价格: 自上次访问后的价格下降</label>
// </p>
// <p data-search="描述 &amp; Features: Feature 1">
//     <input id="feature0-1657777039604" data-col-id="feature0" type="checkbox" '="">
//     <label for="feature0-1657777039604">描述 &amp; Features: Feature 1</label>
// </p>
// <p data-search="描述 &amp; Features: Feature 2">
//     <input id="feature1-1657777039604" data-col-id="feature1" type="checkbox" '="">
//     <label for="feature1-1657777039604">描述 &amp; Features: Feature 2</label>
// </p>
// <p data-search="描述 &amp; Features: Feature 3">
//     <input id="feature2-1657777039604" data-col-id="feature2" type="checkbox" '="">
//     <label for="feature2-1657777039604">描述 &amp; Features: Feature 3</label>
// </p>
// <p data-search="描述 &amp; Features: Feature 4">
//     <input id="feature3-1657777039604" data-col-id="feature3" type="checkbox" '="">
//     <label for="feature3-1657777039604">描述 &amp; Features: Feature 4</label>
// </p>
// <p data-search="描述 &amp; Features: Feature 5">
//     <input id="feature4-1657777039604" data-col-id="feature4" type="checkbox" '="">
//     <label for="feature4-1657777039604">描述 &amp; Features: Feature 5</label>
// </p>
// <p data-search="描述 &amp; Features: 描述">
//     <input id="description-1657777039604" data-col-id="description" type="checkbox" '="">
//     <label for="description-1657777039604">描述 &amp; Features: 描述</label>
// </p>
// <p data-search="收藏品: 180 days avg.">
//     <input id="COLLECTIBLE_avg180-1657777039604" data-col-id="COLLECTIBLE_avg180" type="checkbox" '="">
//     <label for="COLLECTIBLE_avg180-1657777039604">收藏品: 180 days avg.</label>
// </p>
// <p data-search="收藏品: 30 days avg.">
//     <input id="COLLECTIBLE_avg30-1657777039604" data-col-id="COLLECTIBLE_avg30" type="checkbox" '="">
//     <label for="COLLECTIBLE_avg30-1657777039604">收藏品: 30 days avg.</label>
// </p>
// <p data-search="收藏品: 30 days drop %">
//     <input id="COLLECTIBLE_deltaPercent30-1657777039604" data-col-id="COLLECTIBLE_deltaPercent30" type="checkbox" '="">
//     <label for="COLLECTIBLE_deltaPercent30-1657777039604">收藏品: 30 days drop %</label>
// </p>
// <p data-search="收藏品: 90 days avg.">
//     <input id="COLLECTIBLE_avg90-1657777039604" data-col-id="COLLECTIBLE_avg90" type="checkbox" '="">
//     <label for="COLLECTIBLE_avg90-1657777039604">收藏品: 90 days avg.</label>
// </p>
// <p data-search="收藏品: 90 days drop %">
//     <input id="COLLECTIBLE_deltaPercent90-1657777039604" data-col-id="COLLECTIBLE_deltaPercent90" type="checkbox" '="">
//     <label for="COLLECTIBLE_deltaPercent90-1657777039604">收藏品: 90 days drop %</label>
// </p>
// <p data-search="收藏品: Drop % since last visit">
//     <input id="COLLECTIBLE_deltaPercentCustom-1657777039604" data-col-id="COLLECTIBLE_deltaPercentCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_deltaPercentCustom-1657777039604">收藏品: Drop % since last visit</label>
// </p>
// <p data-search="收藏品: Highest">
//     <input id="COLLECTIBLE_highest-1657777039604" data-col-id="COLLECTIBLE_highest" type="checkbox" '="">
//     <label for="COLLECTIBLE_highest-1657777039604">收藏品: Highest</label>
// </p>
// <p data-search="收藏品: Last visit">
//     <input id="COLLECTIBLE_atIntervalStart-1657777039604" data-col-id="COLLECTIBLE_atIntervalStart" type="checkbox" '="">
//     <label for="COLLECTIBLE_atIntervalStart-1657777039604">收藏品: Last visit</label>
// </p>
// <p data-search="收藏品: Lowest">
//     <input id="COLLECTIBLE_lowest-1657777039604" data-col-id="COLLECTIBLE_lowest" type="checkbox" '="">
//     <label for="COLLECTIBLE_lowest-1657777039604">收藏品: Lowest</label>
// </p>
// <p data-search="收藏品: 目前">
//     <input id="COLLECTIBLE_current-1657777039604" data-col-id="COLLECTIBLE_current" type="checkbox" '="">
//     <label for="COLLECTIBLE_current-1657777039604">收藏品: 目前</label>
// </p>
// <p data-search="收藏品: 自上次访问后的价格下降">
//     <input id="COLLECTIBLE_deltaCustom-1657777039604" data-col-id="COLLECTIBLE_deltaCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_deltaCustom-1657777039604">收藏品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="收藏品计数: 180 days avg.">
//     <input id="COUNT_COLLECTIBLE_avg180-1657777039604" data-col-id="COUNT_COLLECTIBLE_avg180" type="checkbox" '="">
//     <label for="COUNT_COLLECTIBLE_avg180-1657777039604">收藏品计数: 180 days avg.</label>
// </p>
// <p data-search="收藏品计数: 30 days avg.">
//     <input id="COUNT_COLLECTIBLE_avg30-1657777039604" data-col-id="COUNT_COLLECTIBLE_avg30" type="checkbox" '="">
//     <label for="COUNT_COLLECTIBLE_avg30-1657777039604">收藏品计数: 30 days avg.</label>
// </p>
// <p data-search="收藏品计数: 90 days avg.">
//     <input id="COUNT_COLLECTIBLE_avg90-1657777039604" data-col-id="COUNT_COLLECTIBLE_avg90" type="checkbox" '="">
//     <label for="COUNT_COLLECTIBLE_avg90-1657777039604">收藏品计数: 90 days avg.</label>
// </p>
// <p data-search="收藏品计数: 90 days drop %">
//     <input id="COUNT_COLLECTIBLE_deltaPercent90-1657777039604" data-col-id="COUNT_COLLECTIBLE_deltaPercent90" type="checkbox" '="">
//     <label for="COUNT_COLLECTIBLE_deltaPercent90-1657777039604">收藏品计数: 90 days drop %</label>
// </p>
// <p data-search="收藏品计数: 目前">
//     <input id="COUNT_COLLECTIBLE_current-1657777039604" data-col-id="COUNT_COLLECTIBLE_current" type="checkbox" '="">
//     <label for="COUNT_COLLECTIBLE_current-1657777039604">收藏品计数: 目前</label>
// </p>
// <p data-search="收藏品，像新的一样: 180 days avg.">
//     <input id="COLLECTIBLE_NEW_SHIPPING_avg180-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_avg180" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_avg180-1657777039604">收藏品，像新的一样: 180 days avg.</label>
// </p>
// <p data-search="收藏品，像新的一样: 30 days avg.">
//     <input id="COLLECTIBLE_NEW_SHIPPING_avg30-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_avg30" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_avg30-1657777039604">收藏品，像新的一样: 30 days avg.</label>
// </p>
// <p data-search="收藏品，像新的一样: 30 days drop %">
//     <input id="COLLECTIBLE_NEW_SHIPPING_deltaPercent30-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_deltaPercent30-1657777039604">收藏品，像新的一样: 30 days drop %</label>
// </p>
// <p data-search="收藏品，像新的一样: 90 days avg.">
//     <input id="COLLECTIBLE_NEW_SHIPPING_avg90-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_avg90" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_avg90-1657777039604">收藏品，像新的一样: 90 days avg.</label>
// </p>
// <p data-search="收藏品，像新的一样: 90 days drop %">
//     <input id="COLLECTIBLE_NEW_SHIPPING_deltaPercent90-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_deltaPercent90-1657777039604">收藏品，像新的一样: 90 days drop %</label>
// </p>
// <p data-search="收藏品，像新的一样: Drop % since last visit">
//     <input id="COLLECTIBLE_NEW_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_deltaPercentCustom-1657777039604">收藏品，像新的一样: Drop % since last visit</label>
// </p>
// <p data-search="收藏品，像新的一样: Highest">
//     <input id="COLLECTIBLE_NEW_SHIPPING_highest-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_highest" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_highest-1657777039604">收藏品，像新的一样: Highest</label>
// </p>
// <p data-search="收藏品，像新的一样: Last visit">
//     <input id="COLLECTIBLE_NEW_SHIPPING_atIntervalStart-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_atIntervalStart-1657777039604">收藏品，像新的一样: Last visit</label>
// </p>
// <p data-search="收藏品，像新的一样: Lowest">
//     <input id="COLLECTIBLE_NEW_SHIPPING_lowest-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_lowest" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_lowest-1657777039604">收藏品，像新的一样: Lowest</label>
// </p>
// <p data-search="收藏品，像新的一样: 目前">
//     <input id="COLLECTIBLE_NEW_SHIPPING_current-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_current" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_current-1657777039604">收藏品，像新的一样: 目前</label>
// </p>
// <p data-search="收藏品，像新的一样: 自上次访问后的价格下降">
//     <input id="COLLECTIBLE_NEW_SHIPPING_deltaCustom-1657777039604" data-col-id="COLLECTIBLE_NEW_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_NEW_SHIPPING_deltaCustom-1657777039604">收藏品，像新的一样: 自上次访问后的价格下降</label>
// </p>
// <p data-search="收藏品，可接受的: 180 days avg.">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg180-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg180" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg180-1657777039604">收藏品，可接受的: 180 days avg.</label>
// </p>
// <p data-search="收藏品，可接受的: 30 days avg.">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg30-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg30" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg30-1657777039604">收藏品，可接受的: 30 days avg.</label>
// </p>
// <p data-search="收藏品，可接受的: 30 days drop %">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent30-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent30-1657777039604">收藏品，可接受的: 30 days drop %</label>
// </p>
// <p data-search="收藏品，可接受的: 90 days avg.">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg90-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg90" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_avg90-1657777039604">收藏品，可接受的: 90 days avg.</label>
// </p>
// <p data-search="收藏品，可接受的: 90 days drop %">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent90-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercent90-1657777039604">收藏品，可接受的: 90 days drop %</label>
// </p>
// <p data-search="收藏品，可接受的: Drop % since last visit">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaPercentCustom-1657777039604">收藏品，可接受的: Drop % since last visit</label>
// </p>
// <p data-search="收藏品，可接受的: Highest">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_highest-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_highest" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_highest-1657777039604">收藏品，可接受的: Highest</label>
// </p>
// <p data-search="收藏品，可接受的: Last visit">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_atIntervalStart-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_atIntervalStart-1657777039604">收藏品，可接受的: Last visit</label>
// </p>
// <p data-search="收藏品，可接受的: Lowest">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_lowest-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_lowest" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_lowest-1657777039604">收藏品，可接受的: Lowest</label>
// </p>
// <p data-search="收藏品，可接受的: 目前">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_current-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_current" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_current-1657777039604">收藏品，可接受的: 目前</label>
// </p>
// <p data-search="收藏品，可接受的: 自上次访问后的价格下降">
//     <input id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaCustom-1657777039604" data-col-id="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_ACCEPTABLE_SHIPPING_deltaCustom-1657777039604">收藏品，可接受的: 自上次访问后的价格下降</label>
// </p>
// <p data-search="收藏品，好: 180 days avg.">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_avg180-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_avg180" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_avg180-1657777039604">收藏品，好: 180 days avg.</label>
// </p>
// <p data-search="收藏品，好: 30 days avg.">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_avg30-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_avg30" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_avg30-1657777039604">收藏品，好: 30 days avg.</label>
// </p>
// <p data-search="收藏品，好: 30 days drop %">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_deltaPercent30-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_deltaPercent30-1657777039604">收藏品，好: 30 days drop %</label>
// </p>
// <p data-search="收藏品，好: 90 days avg.">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_avg90-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_avg90" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_avg90-1657777039604">收藏品，好: 90 days avg.</label>
// </p>
// <p data-search="收藏品，好: 90 days drop %">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_deltaPercent90-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_deltaPercent90-1657777039604">收藏品，好: 90 days drop %</label>
// </p>
// <p data-search="收藏品，好: Drop % since last visit">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_deltaPercentCustom-1657777039604">收藏品，好: Drop % since last visit</label>
// </p>
// <p data-search="收藏品，好: Highest">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_highest-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_highest" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_highest-1657777039604">收藏品，好: Highest</label>
// </p>
// <p data-search="收藏品，好: Last visit">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_atIntervalStart-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_atIntervalStart-1657777039604">收藏品，好: Last visit</label>
// </p>
// <p data-search="收藏品，好: Lowest">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_lowest-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_lowest" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_lowest-1657777039604">收藏品，好: Lowest</label>
// </p>
// <p data-search="收藏品，好: 目前">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_current-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_current" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_current-1657777039604">收藏品，好: 目前</label>
// </p>
// <p data-search="收藏品，好: 自上次访问后的价格下降">
//     <input id="COLLECTIBLE_GOOD_SHIPPING_deltaCustom-1657777039604" data-col-id="COLLECTIBLE_GOOD_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_GOOD_SHIPPING_deltaCustom-1657777039604">收藏品，好: 自上次访问后的价格下降</label>
// </p>
// <p data-search="收藏品，非常好: 180 days avg.">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg180-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg180" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_avg180-1657777039604">收藏品，非常好: 180 days avg.</label>
// </p>
// <p data-search="收藏品，非常好: 30 days avg.">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg30-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg30" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_avg30-1657777039604">收藏品，非常好: 30 days avg.</label>
// </p>
// <p data-search="收藏品，非常好: 30 days drop %">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent30-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent30-1657777039604">收藏品，非常好: 30 days drop %</label>
// </p>
// <p data-search="收藏品，非常好: 90 days avg.">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg90-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_avg90" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_avg90-1657777039604">收藏品，非常好: 90 days avg.</label>
// </p>
// <p data-search="收藏品，非常好: 90 days drop %">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent90-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercent90-1657777039604">收藏品，非常好: 90 days drop %</label>
// </p>
// <p data-search="收藏品，非常好: Drop % since last visit">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaPercentCustom-1657777039604">收藏品，非常好: Drop % since last visit</label>
// </p>
// <p data-search="收藏品，非常好: Highest">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_highest-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_highest" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_highest-1657777039604">收藏品，非常好: Highest</label>
// </p>
// <p data-search="收藏品，非常好: Last visit">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_atIntervalStart-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_atIntervalStart-1657777039604">收藏品，非常好: Last visit</label>
// </p>
// <p data-search="收藏品，非常好: Lowest">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_lowest-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_lowest" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_lowest-1657777039604">收藏品，非常好: Lowest</label>
// </p>
// <p data-search="收藏品，非常好: 目前">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_current-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_current" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_current-1657777039604">收藏品，非常好: 目前</label>
// </p>
// <p data-search="收藏品，非常好: 自上次访问后的价格下降">
//     <input id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaCustom-1657777039604" data-col-id="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="COLLECTIBLE_VERY_GOOD_SHIPPING_deltaCustom-1657777039604">收藏品，非常好: 自上次访问后的价格下降</label>
// </p>
// <p data-search="翻新品: 180 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg180-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg180" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg180-1657777039604">翻新品: 180 days avg.</label>
// </p>
// <p data-search="翻新品: 180 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg180-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg180" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg180-1657777039604">翻新品: 180 days avg.</label>
// </p>
// <p data-search="翻新品: 30 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg30-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg30" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg30-1657777039604">翻新品: 30 days avg.</label>
// </p>
// <p data-search="翻新品: 30 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg30-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg30" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg30-1657777039604">翻新品: 30 days avg.</label>
// </p>
// <p data-search="翻新品: 30 days drop %">
//     <input id="REFURBISHED_SHIPPING_deltaPercent30-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercent30-1657777039604">翻新品: 30 days drop %</label>
// </p>
// <p data-search="翻新品: 30 days drop %">
//     <input id="REFURBISHED_SHIPPING_deltaPercent30-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercent30-1657777039604">翻新品: 30 days drop %</label>
// </p>
// <p data-search="翻新品: 90 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg90-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg90" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg90-1657777039604">翻新品: 90 days avg.</label>
// </p>
// <p data-search="翻新品: 90 days avg.">
//     <input id="REFURBISHED_SHIPPING_avg90-1657777039604" data-col-id="REFURBISHED_SHIPPING_avg90" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_avg90-1657777039604">翻新品: 90 days avg.</label>
// </p>
// <p data-search="翻新品: 90 days drop %">
//     <input id="REFURBISHED_SHIPPING_deltaPercent90-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercent90-1657777039604">翻新品: 90 days drop %</label>
// </p>
// <p data-search="翻新品: 90 days drop %">
//     <input id="REFURBISHED_SHIPPING_deltaPercent90-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercent90-1657777039604">翻新品: 90 days drop %</label>
// </p>
// <p data-search="翻新品: Drop % since last visit">
//     <input id="REFURBISHED_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercentCustom-1657777039604">翻新品: Drop % since last visit</label>
// </p>
// <p data-search="翻新品: Drop % since last visit">
//     <input id="REFURBISHED_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaPercentCustom-1657777039604">翻新品: Drop % since last visit</label>
// </p>
// <p data-search="翻新品: Highest">
//     <input id="REFURBISHED_SHIPPING_highest-1657777039604" data-col-id="REFURBISHED_SHIPPING_highest" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_highest-1657777039604">翻新品: Highest</label>
// </p>
// <p data-search="翻新品: Highest">
//     <input id="REFURBISHED_SHIPPING_highest-1657777039604" data-col-id="REFURBISHED_SHIPPING_highest" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_highest-1657777039604">翻新品: Highest</label>
// </p>
// <p data-search="翻新品: Last visit">
//     <input id="REFURBISHED_SHIPPING_atIntervalStart-1657777039604" data-col-id="REFURBISHED_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_atIntervalStart-1657777039604">翻新品: Last visit</label>
// </p>
// <p data-search="翻新品: Last visit">
//     <input id="REFURBISHED_SHIPPING_atIntervalStart-1657777039604" data-col-id="REFURBISHED_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_atIntervalStart-1657777039604">翻新品: Last visit</label>
// </p>
// <p data-search="翻新品: Lowest">
//     <input id="REFURBISHED_SHIPPING_lowest-1657777039604" data-col-id="REFURBISHED_SHIPPING_lowest" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_lowest-1657777039604">翻新品: Lowest</label>
// </p>
// <p data-search="翻新品: Lowest">
//     <input id="REFURBISHED_SHIPPING_lowest-1657777039604" data-col-id="REFURBISHED_SHIPPING_lowest" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_lowest-1657777039604">翻新品: Lowest</label>
// </p>
// <p data-search="翻新品: 目前">
//     <input id="REFURBISHED_SHIPPING_current-1657777039604" data-col-id="REFURBISHED_SHIPPING_current" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_current-1657777039604">翻新品: 目前</label>
// </p>
// <p data-search="翻新品: 目前">
//     <input id="REFURBISHED_SHIPPING_current-1657777039604" data-col-id="REFURBISHED_SHIPPING_current" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_current-1657777039604">翻新品: 目前</label>
// </p>
// <p data-search="翻新品: 自上次访问后的价格下降">
//     <input id="REFURBISHED_SHIPPING_deltaCustom-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaCustom-1657777039604">翻新品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="翻新品: 自上次访问后的价格下降">
//     <input id="REFURBISHED_SHIPPING_deltaCustom-1657777039604" data-col-id="REFURBISHED_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="REFURBISHED_SHIPPING_deltaCustom-1657777039604">翻新品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="翻新品计数: 180 days avg.">
//     <input id="COUNT_REFURBISHED_avg180-1657777039604" data-col-id="COUNT_REFURBISHED_avg180" type="checkbox" '="">
//     <label for="COUNT_REFURBISHED_avg180-1657777039604">翻新品计数: 180 days avg.</label>
// </p>
// <p data-search="翻新品计数: 30 days avg.">
//     <input id="COUNT_REFURBISHED_avg30-1657777039604" data-col-id="COUNT_REFURBISHED_avg30" type="checkbox" '="">
//     <label for="COUNT_REFURBISHED_avg30-1657777039604">翻新品计数: 30 days avg.</label>
// </p>
// <p data-search="翻新品计数: 90 days avg.">
//     <input id="COUNT_REFURBISHED_avg90-1657777039604" data-col-id="COUNT_REFURBISHED_avg90" type="checkbox" '="">
//     <label for="COUNT_REFURBISHED_avg90-1657777039604">翻新品计数: 90 days avg.</label>
// </p>
// <p data-search="翻新品计数: 90 days drop %">
//     <input id="COUNT_REFURBISHED_deltaPercent90-1657777039604" data-col-id="COUNT_REFURBISHED_deltaPercent90" type="checkbox" '="">
//     <label for="COUNT_REFURBISHED_deltaPercent90-1657777039604">翻新品计数: 90 days drop %</label>
// </p>
// <p data-search="翻新品计数: 目前">
//     <input id="COUNT_REFURBISHED_current-1657777039604" data-col-id="COUNT_REFURBISHED_current" type="checkbox" '="">
//     <label for="COUNT_REFURBISHED_current-1657777039604">翻新品计数: 目前</label>
// </p>
// <p data-search="退换货实惠商品: 180 days avg.">
//     <input id="WAREHOUSE_avg180-1657777039604" data-col-id="WAREHOUSE_avg180" type="checkbox" '="">
//     <label for="WAREHOUSE_avg180-1657777039604">退换货实惠商品: 180 days avg.</label>
// </p>
// <p data-search="退换货实惠商品: 30 days avg.">
//     <input id="WAREHOUSE_avg30-1657777039604" data-col-id="WAREHOUSE_avg30" type="checkbox" '="">
//     <label for="WAREHOUSE_avg30-1657777039604">退换货实惠商品: 30 days avg.</label>
// </p>
// <p data-search="退换货实惠商品: 30 days drop %">
//     <input id="WAREHOUSE_deltaPercent30-1657777039604" data-col-id="WAREHOUSE_deltaPercent30" type="checkbox" '="">
//     <label for="WAREHOUSE_deltaPercent30-1657777039604">退换货实惠商品: 30 days drop %</label>
// </p>
// <p data-search="退换货实惠商品: 90 days avg.">
//     <input id="WAREHOUSE_avg90-1657777039604" data-col-id="WAREHOUSE_avg90" type="checkbox" '="">
//     <label for="WAREHOUSE_avg90-1657777039604">退换货实惠商品: 90 days avg.</label>
// </p>
// <p data-search="退换货实惠商品: 90 days drop %">
//     <input id="WAREHOUSE_deltaPercent90-1657777039604" data-col-id="WAREHOUSE_deltaPercent90" type="checkbox" '="">
//     <label for="WAREHOUSE_deltaPercent90-1657777039604">退换货实惠商品: 90 days drop %</label>
// </p>
// <p data-search="退换货实惠商品: Drop % since last visit">
//     <input id="WAREHOUSE_deltaPercentCustom-1657777039604" data-col-id="WAREHOUSE_deltaPercentCustom" type="checkbox" '="">
//     <label for="WAREHOUSE_deltaPercentCustom-1657777039604">退换货实惠商品: Drop % since last visit</label>
// </p>
// <p data-search="退换货实惠商品: Highest">
//     <input id="WAREHOUSE_highest-1657777039604" data-col-id="WAREHOUSE_highest" type="checkbox" '="">
//     <label for="WAREHOUSE_highest-1657777039604">退换货实惠商品: Highest</label>
// </p>
// <p data-search="退换货实惠商品: Last visit">
//     <input id="WAREHOUSE_atIntervalStart-1657777039604" data-col-id="WAREHOUSE_atIntervalStart" type="checkbox" '="">
//     <label for="WAREHOUSE_atIntervalStart-1657777039604">退换货实惠商品: Last visit</label>
// </p>
// <p data-search="退换货实惠商品: Lowest">
//     <input id="WAREHOUSE_lowest-1657777039604" data-col-id="WAREHOUSE_lowest" type="checkbox" '="">
//     <label for="WAREHOUSE_lowest-1657777039604">退换货实惠商品: Lowest</label>
// </p>
// <p data-search="退换货实惠商品: 目前">
//     <input id="WAREHOUSE_current-1657777039604" data-col-id="WAREHOUSE_current" type="checkbox" '="">
//     <label for="WAREHOUSE_current-1657777039604">退换货实惠商品: 目前</label>
// </p>
// <p data-search="退换货实惠商品: 自上次访问后的价格下降">
//     <input id="WAREHOUSE_deltaCustom-1657777039604" data-col-id="WAREHOUSE_deltaCustom" type="checkbox" '="">
//     <label for="WAREHOUSE_deltaCustom-1657777039604">退换货实惠商品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="销售排行: 180 days avg.">
//     <input id="SALES_avg180-1657777039604" data-col-id="SALES_avg180" type="checkbox" '="">
//     <label for="SALES_avg180-1657777039604">销售排行: 180 days avg.</label>
// </p>
// <p data-search="销售排行: 30 days avg.">
//     <input id="SALES_avg30-1657777039604" data-col-id="SALES_avg30" type="checkbox" checked="checked" '="">
//     <label for="SALES_avg30-1657777039604">销售排行: 30 days avg.</label>
// </p>
// <p data-search="销售排行: 30 days drop %">
//     <input id="SALES_deltaPercent30-1657777039604" data-col-id="SALES_deltaPercent30" type="checkbox" '="">
//     <label for="SALES_deltaPercent30-1657777039604">销售排行: 30 days drop %</label>
// </p>
// <p data-search="销售排行: 90 days avg.">
//     <input id="SALES_avg90-1657777039604" data-col-id="SALES_avg90" type="checkbox" checked="checked" '="">
//     <label for="SALES_avg90-1657777039604">销售排行: 90 days avg.</label>
// </p>
// <p data-search="销售排行: 90 days drop %">
//     <input id="SALES_deltaPercent90-1657777039604" data-col-id="SALES_deltaPercent90" type="checkbox" '="">
//     <label for="SALES_deltaPercent90-1657777039604">销售排行: 90 days drop %</label>
// </p>
// <p data-search="销售排行: Drop % since last visit">
//     <input id="SALES_deltaPercentCustom-1657777039604" data-col-id="SALES_deltaPercentCustom" type="checkbox" '="">
//     <label for="SALES_deltaPercentCustom-1657777039604">销售排行: Drop % since last visit</label>
// </p>
// <p data-search="销售排行: Drops last 180 days">
//     <input id="salesRankDrops180-1657777039604" data-col-id="salesRankDrops180" type="checkbox" '="">
//     <label for="salesRankDrops180-1657777039604">销售排行: Drops last 180 days</label>
// </p>
// <p data-search="销售排行: Drops last 30 days">
//     <input id="salesRankDrops30-1657777039604" data-col-id="salesRankDrops30" type="checkbox" '="">
//     <label for="salesRankDrops30-1657777039604">销售排行: Drops last 30 days</label>
// </p>
// <p data-search="销售排行: Drops last 90 days">
//     <input id="salesRankDrops90-1657777039604" data-col-id="salesRankDrops90" type="checkbox" '="">
//     <label for="salesRankDrops90-1657777039604">销售排行: Drops last 90 days</label>
// </p>
// <p data-search="销售排行: Highest">
//     <input id="SALES_highest-1657777039604" data-col-id="SALES_highest" type="checkbox" '="">
//     <label for="SALES_highest-1657777039604">销售排行: Highest</label>
// </p>
// <p data-search="销售排行: Last visit">
//     <input id="SALES_atIntervalStart-1657777039604" data-col-id="SALES_atIntervalStart" type="checkbox" '="">
//     <label for="SALES_atIntervalStart-1657777039604">销售排行: Last visit</label>
// </p>
// <p data-search="销售排行: Lowest">
//     <input id="SALES_lowest-1657777039604" data-col-id="SALES_lowest" type="checkbox" '="">
//     <label for="SALES_lowest-1657777039604">销售排行: Lowest</label>
// </p>
// <p data-search="销售排行: Reference">
//     <input id="salesRankReference-1657777039604" data-col-id="salesRankReference" type="checkbox" '="">
//     <label for="salesRankReference-1657777039604">销售排行: Reference</label>
// </p>
// <p data-search="销售排行: Subcategory Sales Ranks">
//     <input id="subcategorySalesRanks-1657777039604" data-col-id="subcategorySalesRanks" type="checkbox" '="">
//     <label for="subcategorySalesRanks-1657777039604">销售排行: Subcategory Sales Ranks</label>
// </p>
// <p data-search="销售排行: 目前">
//     <input id="SALES_current-1657777039604" data-col-id="SALES_current" type="checkbox" checked="checked" '="">
//     <label for="SALES_current-1657777039604">销售排行: 目前</label>
// </p>
// <p data-search="销售排行: 自上次访问后的价格下降">
//     <input id="SALES_deltaCustom-1657777039604" data-col-id="SALES_deltaCustom" type="checkbox" '="">
//     <label for="SALES_deltaCustom-1657777039604">销售排行: 自上次访问后的价格下降</label>
// </p>
// <p data-search="闪电特价: Upcoming Deal">
//     <input id="LIGHTNING_DEAL_upcoming-1657777039604" data-col-id="LIGHTNING_DEAL_upcoming" type="checkbox" '="">
//     <label for="LIGHTNING_DEAL_upcoming-1657777039604">闪电特价: Upcoming Deal</label>
// </p>
// <p data-search="闪电特价: 目前">
//     <input id="LIGHTNING_DEAL_current-1657777039604" data-col-id="LIGHTNING_DEAL_current" type="checkbox" '="">
//     <label for="LIGHTNING_DEAL_current-1657777039604">闪电特价: 目前</label>
// </p>
// <p data-search="非全新品: 180 days avg.">
//     <input id="USED_avg180-1657777039604" data-col-id="USED_avg180" type="checkbox" '="">
//     <label for="USED_avg180-1657777039604">非全新品: 180 days avg.</label>
// </p>
// <p data-search="非全新品: 30 days avg.">
//     <input id="USED_avg30-1657777039604" data-col-id="USED_avg30" type="checkbox" '="">
//     <label for="USED_avg30-1657777039604">非全新品: 30 days avg.</label>
// </p>
// <p data-search="非全新品: 30 days drop %">
//     <input id="USED_deltaPercent30-1657777039604" data-col-id="USED_deltaPercent30" type="checkbox" '="">
//     <label for="USED_deltaPercent30-1657777039604">非全新品: 30 days drop %</label>
// </p>
// <p data-search="非全新品: 90 days avg.">
//     <input id="USED_avg90-1657777039604" data-col-id="USED_avg90" type="checkbox" '="">
//     <label for="USED_avg90-1657777039604">非全新品: 90 days avg.</label>
// </p>
// <p data-search="非全新品: 90 days drop %">
//     <input id="USED_deltaPercent90-1657777039604" data-col-id="USED_deltaPercent90" type="checkbox" '="">
//     <label for="USED_deltaPercent90-1657777039604">非全新品: 90 days drop %</label>
// </p>
// <p data-search="非全新品: 90 days OOS">
//     <input id="USED_outOfStockPercentage90-1657777039604" data-col-id="USED_outOfStockPercentage90" type="checkbox" '="">
//     <label for="USED_outOfStockPercentage90-1657777039604">非全新品: 90 days OOS</label>
// </p>
// <p data-search="非全新品: Drop % since last visit">
//     <input id="USED_deltaPercentCustom-1657777039604" data-col-id="USED_deltaPercentCustom" type="checkbox" '="">
//     <label for="USED_deltaPercentCustom-1657777039604">非全新品: Drop % since last visit</label>
// </p>
// <p data-search="非全新品: Highest">
//     <input id="USED_highest-1657777039604" data-col-id="USED_highest" type="checkbox" '="">
//     <label for="USED_highest-1657777039604">非全新品: Highest</label>
// </p>
// <p data-search="非全新品: Last visit">
//     <input id="USED_atIntervalStart-1657777039604" data-col-id="USED_atIntervalStart" type="checkbox" '="">
//     <label for="USED_atIntervalStart-1657777039604">非全新品: Last visit</label>
// </p>
// <p data-search="非全新品: Lowest">
//     <input id="USED_lowest-1657777039604" data-col-id="USED_lowest" type="checkbox" '="">
//     <label for="USED_lowest-1657777039604">非全新品: Lowest</label>
// </p>
// <p data-search="非全新品: 目前">
//     <input id="USED_current-1657777039604" data-col-id="USED_current" type="checkbox" '="">
//     <label for="USED_current-1657777039604">非全新品: 目前</label>
// </p>
// <p data-search="非全新品: 自上次访问后的价格下降">
//     <input id="USED_deltaCustom-1657777039604" data-col-id="USED_deltaCustom" type="checkbox" '="">
//     <label for="USED_deltaCustom-1657777039604">非全新品: 自上次访问后的价格下降</label>
// </p>
// <p data-search="非全新品计数: 180 days avg.">
//     <input id="COUNT_USED_avg180-1657777039604" data-col-id="COUNT_USED_avg180" type="checkbox" '="">
//     <label for="COUNT_USED_avg180-1657777039604">非全新品计数: 180 days avg.</label>
// </p>
// <p data-search="非全新品计数: 30 days avg.">
//     <input id="COUNT_USED_avg30-1657777039604" data-col-id="COUNT_USED_avg30" type="checkbox" '="">
//     <label for="COUNT_USED_avg30-1657777039604">非全新品计数: 30 days avg.</label>
// </p>
// <p data-search="非全新品计数: 90 days avg.">
//     <input id="COUNT_USED_avg90-1657777039604" data-col-id="COUNT_USED_avg90" type="checkbox" '="">
//     <label for="COUNT_USED_avg90-1657777039604">非全新品计数: 90 days avg.</label>
// </p>
// <p data-search="非全新品计数: 90 days drop %">
//     <input id="COUNT_USED_deltaPercent90-1657777039604" data-col-id="COUNT_USED_deltaPercent90" type="checkbox" '="">
//     <label for="COUNT_USED_deltaPercent90-1657777039604">非全新品计数: 90 days drop %</label>
// </p>
// <p data-search="非全新品计数: 目前">
//     <input id="COUNT_USED_current-1657777039604" data-col-id="COUNT_USED_current" type="checkbox" '="">
//     <label for="COUNT_USED_current-1657777039604">非全新品计数: 目前</label>
// </p>
// <p data-search="非全新品，像新品一样: 180 days avg.">
//     <input id="USED_NEW_SHIPPING_avg180-1657777039604" data-col-id="USED_NEW_SHIPPING_avg180" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_avg180-1657777039604">非全新品，像新品一样: 180 days avg.</label>
// </p>
// <p data-search="非全新品，像新品一样: 30 days avg.">
//     <input id="USED_NEW_SHIPPING_avg30-1657777039604" data-col-id="USED_NEW_SHIPPING_avg30" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_avg30-1657777039604">非全新品，像新品一样: 30 days avg.</label>
// </p>
// <p data-search="非全新品，像新品一样: 30 days drop %">
//     <input id="USED_NEW_SHIPPING_deltaPercent30-1657777039604" data-col-id="USED_NEW_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_deltaPercent30-1657777039604">非全新品，像新品一样: 30 days drop %</label>
// </p>
// <p data-search="非全新品，像新品一样: 90 days avg.">
//     <input id="USED_NEW_SHIPPING_avg90-1657777039604" data-col-id="USED_NEW_SHIPPING_avg90" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_avg90-1657777039604">非全新品，像新品一样: 90 days avg.</label>
// </p>
// <p data-search="非全新品，像新品一样: 90 days drop %">
//     <input id="USED_NEW_SHIPPING_deltaPercent90-1657777039604" data-col-id="USED_NEW_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_deltaPercent90-1657777039604">非全新品，像新品一样: 90 days drop %</label>
// </p>
// <p data-search="非全新品，像新品一样: Drop % since last visit">
//     <input id="USED_NEW_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="USED_NEW_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_deltaPercentCustom-1657777039604">非全新品，像新品一样: Drop % since last visit</label>
// </p>
// <p data-search="非全新品，像新品一样: Highest">
//     <input id="USED_NEW_SHIPPING_highest-1657777039604" data-col-id="USED_NEW_SHIPPING_highest" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_highest-1657777039604">非全新品，像新品一样: Highest</label>
// </p>
// <p data-search="非全新品，像新品一样: Last visit">
//     <input id="USED_NEW_SHIPPING_atIntervalStart-1657777039604" data-col-id="USED_NEW_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_atIntervalStart-1657777039604">非全新品，像新品一样: Last visit</label>
// </p>
// <p data-search="非全新品，像新品一样: Lowest">
//     <input id="USED_NEW_SHIPPING_lowest-1657777039604" data-col-id="USED_NEW_SHIPPING_lowest" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_lowest-1657777039604">非全新品，像新品一样: Lowest</label>
// </p>
// <p data-search="非全新品，像新品一样: 目前">
//     <input id="USED_NEW_SHIPPING_current-1657777039604" data-col-id="USED_NEW_SHIPPING_current" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_current-1657777039604">非全新品，像新品一样: 目前</label>
// </p>
// <p data-search="非全新品，像新品一样: 自上次访问后的价格下降">
//     <input id="USED_NEW_SHIPPING_deltaCustom-1657777039604" data-col-id="USED_NEW_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="USED_NEW_SHIPPING_deltaCustom-1657777039604">非全新品，像新品一样: 自上次访问后的价格下降</label>
// </p>
// <p data-search="非全新品，可接受的: 180 days avg.">
//     <input id="USED_ACCEPTABLE_SHIPPING_avg180-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_avg180" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_avg180-1657777039604">非全新品，可接受的: 180 days avg.</label>
// </p>
// <p data-search="非全新品，可接受的: 30 days avg.">
//     <input id="USED_ACCEPTABLE_SHIPPING_avg30-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_avg30" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_avg30-1657777039604">非全新品，可接受的: 30 days avg.</label>
// </p>
// <p data-search="非全新品，可接受的: 30 days drop %">
//     <input id="USED_ACCEPTABLE_SHIPPING_deltaPercent30-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_deltaPercent30-1657777039604">非全新品，可接受的: 30 days drop %</label>
// </p>
// <p data-search="非全新品，可接受的: 90 days avg.">
//     <input id="USED_ACCEPTABLE_SHIPPING_avg90-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_avg90" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_avg90-1657777039604">非全新品，可接受的: 90 days avg.</label>
// </p>
// <p data-search="非全新品，可接受的: 90 days drop %">
//     <input id="USED_ACCEPTABLE_SHIPPING_deltaPercent90-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_deltaPercent90-1657777039604">非全新品，可接受的: 90 days drop %</label>
// </p>
// <p data-search="非全新品，可接受的: Drop % since last visit">
//     <input id="USED_ACCEPTABLE_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_deltaPercentCustom-1657777039604">非全新品，可接受的: Drop % since last visit</label>
// </p>
// <p data-search="非全新品，可接受的: Highest">
//     <input id="USED_ACCEPTABLE_SHIPPING_highest-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_highest" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_highest-1657777039604">非全新品，可接受的: Highest</label>
// </p>
// <p data-search="非全新品，可接受的: Last visit">
//     <input id="USED_ACCEPTABLE_SHIPPING_atIntervalStart-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_atIntervalStart-1657777039604">非全新品，可接受的: Last visit</label>
// </p>
// <p data-search="非全新品，可接受的: Lowest">
//     <input id="USED_ACCEPTABLE_SHIPPING_lowest-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_lowest" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_lowest-1657777039604">非全新品，可接受的: Lowest</label>
// </p>
// <p data-search="非全新品，可接受的: 目前">
//     <input id="USED_ACCEPTABLE_SHIPPING_current-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_current" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_current-1657777039604">非全新品，可接受的: 目前</label>
// </p>
// <p data-search="非全新品，可接受的: 自上次访问后的价格下降">
//     <input id="USED_ACCEPTABLE_SHIPPING_deltaCustom-1657777039604" data-col-id="USED_ACCEPTABLE_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="USED_ACCEPTABLE_SHIPPING_deltaCustom-1657777039604">非全新品，可接受的: 自上次访问后的价格下降</label>
// </p>
// <p data-search="非全新品，好: 180 days avg.">
//     <input id="USED_GOOD_SHIPPING_avg180-1657777039604" data-col-id="USED_GOOD_SHIPPING_avg180" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_avg180-1657777039604">非全新品，好: 180 days avg.</label>
// </p>
// <p data-search="非全新品，好: 30 days avg.">
//     <input id="USED_GOOD_SHIPPING_avg30-1657777039604" data-col-id="USED_GOOD_SHIPPING_avg30" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_avg30-1657777039604">非全新品，好: 30 days avg.</label>
// </p>
// <p data-search="非全新品，好: 30 days drop %">
//     <input id="USED_GOOD_SHIPPING_deltaPercent30-1657777039604" data-col-id="USED_GOOD_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_deltaPercent30-1657777039604">非全新品，好: 30 days drop %</label>
// </p>
// <p data-search="非全新品，好: 90 days avg.">
//     <input id="USED_GOOD_SHIPPING_avg90-1657777039604" data-col-id="USED_GOOD_SHIPPING_avg90" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_avg90-1657777039604">非全新品，好: 90 days avg.</label>
// </p>
// <p data-search="非全新品，好: 90 days drop %">
//     <input id="USED_GOOD_SHIPPING_deltaPercent90-1657777039604" data-col-id="USED_GOOD_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_deltaPercent90-1657777039604">非全新品，好: 90 days drop %</label>
// </p>
// <p data-search="非全新品，好: Drop % since last visit">
//     <input id="USED_GOOD_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="USED_GOOD_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_deltaPercentCustom-1657777039604">非全新品，好: Drop % since last visit</label>
// </p>
// <p data-search="非全新品，好: Highest">
//     <input id="USED_GOOD_SHIPPING_highest-1657777039604" data-col-id="USED_GOOD_SHIPPING_highest" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_highest-1657777039604">非全新品，好: Highest</label>
// </p>
// <p data-search="非全新品，好: Last visit">
//     <input id="USED_GOOD_SHIPPING_atIntervalStart-1657777039604" data-col-id="USED_GOOD_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_atIntervalStart-1657777039604">非全新品，好: Last visit</label>
// </p>
// <p data-search="非全新品，好: Lowest">
//     <input id="USED_GOOD_SHIPPING_lowest-1657777039604" data-col-id="USED_GOOD_SHIPPING_lowest" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_lowest-1657777039604">非全新品，好: Lowest</label>
// </p>
// <p data-search="非全新品，好: 目前">
//     <input id="USED_GOOD_SHIPPING_current-1657777039604" data-col-id="USED_GOOD_SHIPPING_current" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_current-1657777039604">非全新品，好: 目前</label>
// </p>
// <p data-search="非全新品，好: 自上次访问后的价格下降">
//     <input id="USED_GOOD_SHIPPING_deltaCustom-1657777039604" data-col-id="USED_GOOD_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="USED_GOOD_SHIPPING_deltaCustom-1657777039604">非全新品，好: 自上次访问后的价格下降</label>
// </p>
// <p data-search="非全新品，非常好: 180 days avg.">
//     <input id="USED_VERY_GOOD_SHIPPING_avg180-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_avg180" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_avg180-1657777039604">非全新品，非常好: 180 days avg.</label>
// </p>
// <p data-search="非全新品，非常好: 30 days avg.">
//     <input id="USED_VERY_GOOD_SHIPPING_avg30-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_avg30" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_avg30-1657777039604">非全新品，非常好: 30 days avg.</label>
// </p>
// <p data-search="非全新品，非常好: 30 days drop %">
//     <input id="USED_VERY_GOOD_SHIPPING_deltaPercent30-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_deltaPercent30-1657777039604">非全新品，非常好: 30 days drop %</label>
// </p>
// <p data-search="非全新品，非常好: 90 days avg.">
//     <input id="USED_VERY_GOOD_SHIPPING_avg90-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_avg90" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_avg90-1657777039604">非全新品，非常好: 90 days avg.</label>
// </p>
// <p data-search="非全新品，非常好: 90 days drop %">
//     <input id="USED_VERY_GOOD_SHIPPING_deltaPercent90-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_deltaPercent90-1657777039604">非全新品，非常好: 90 days drop %</label>
// </p>
// <p data-search="非全新品，非常好: Drop % since last visit">
//     <input id="USED_VERY_GOOD_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_deltaPercentCustom-1657777039604">非全新品，非常好: Drop % since last visit</label>
// </p>
// <p data-search="非全新品，非常好: Highest">
//     <input id="USED_VERY_GOOD_SHIPPING_highest-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_highest" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_highest-1657777039604">非全新品，非常好: Highest</label>
// </p>
// <p data-search="非全新品，非常好: Last visit">
//     <input id="USED_VERY_GOOD_SHIPPING_atIntervalStart-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_atIntervalStart-1657777039604">非全新品，非常好: Last visit</label>
// </p>
// <p data-search="非全新品，非常好: Lowest">
//     <input id="USED_VERY_GOOD_SHIPPING_lowest-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_lowest" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_lowest-1657777039604">非全新品，非常好: Lowest</label>
// </p>
// <p data-search="非全新品，非常好: 目前">
//     <input id="USED_VERY_GOOD_SHIPPING_current-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_current" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_current-1657777039604">非全新品，非常好: 目前</label>
// </p>
// <p data-search="非全新品，非常好: 自上次访问后的价格下降">
//     <input id="USED_VERY_GOOD_SHIPPING_deltaCustom-1657777039604" data-col-id="USED_VERY_GOOD_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="USED_VERY_GOOD_SHIPPING_deltaCustom-1657777039604">非全新品，非常好: 自上次访问后的价格下降</label>
// </p>
// <p data-search="黄金购买框: 180 days avg.">
//     <input id="BUY_BOX_SHIPPING_avg180-1657777039604" data-col-id="BUY_BOX_SHIPPING_avg180" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_avg180-1657777039604">黄金购买框: 180 days avg.</label>
// </p>
// <p data-search="黄金购买框: 30 days avg.">
//     <input id="BUY_BOX_SHIPPING_avg30-1657777039604" data-col-id="BUY_BOX_SHIPPING_avg30" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_avg30-1657777039604">黄金购买框: 30 days avg.</label>
// </p>
// <p data-search="黄金购买框: 30 days drop %">
//     <input id="BUY_BOX_SHIPPING_deltaPercent30-1657777039604" data-col-id="BUY_BOX_SHIPPING_deltaPercent30" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_deltaPercent30-1657777039604">黄金购买框: 30 days drop %</label>
// </p>
// <p data-search="黄金购买框: 90 days avg.">
//     <input id="BUY_BOX_SHIPPING_avg90-1657777039604" data-col-id="BUY_BOX_SHIPPING_avg90" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_avg90-1657777039604">黄金购买框: 90 days avg.</label>
// </p>
// <p data-search="黄金购买框: 90 days drop %">
//     <input id="BUY_BOX_SHIPPING_deltaPercent90-1657777039604" data-col-id="BUY_BOX_SHIPPING_deltaPercent90" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_deltaPercent90-1657777039604">黄金购买框: 90 days drop %</label>
// </p>
// <p data-search="黄金购买框: 90 days OOS">
//     <input id="BUY_BOX_SHIPPING_outOfStockPercentage90-1657777039604" data-col-id="BUY_BOX_SHIPPING_outOfStockPercentage90" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_outOfStockPercentage90-1657777039604">黄金购买框: 90 days OOS</label>
// </p>
// <p data-search="黄金购买框: Drop % since last visit">
//     <input id="BUY_BOX_SHIPPING_deltaPercentCustom-1657777039604" data-col-id="BUY_BOX_SHIPPING_deltaPercentCustom" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_deltaPercentCustom-1657777039604">黄金购买框: Drop % since last visit</label>
// </p>
// <p data-search="黄金购买框: Highest">
//     <input id="BUY_BOX_SHIPPING_highest-1657777039604" data-col-id="BUY_BOX_SHIPPING_highest" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_highest-1657777039604">黄金购买框: Highest</label>
// </p>
// <p data-search="黄金购买框: Last visit">
//     <input id="BUY_BOX_SHIPPING_atIntervalStart-1657777039604" data-col-id="BUY_BOX_SHIPPING_atIntervalStart" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_atIntervalStart-1657777039604">黄金购买框: Last visit</label>
// </p>
// <p data-search="黄金购买框: Lowest">
//     <input id="BUY_BOX_SHIPPING_lowest-1657777039604" data-col-id="BUY_BOX_SHIPPING_lowest" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_lowest-1657777039604">黄金购买框: Lowest</label>
// </p>
// <p data-search="黄金购买框: Stock">
//     <input id="stockBuyBox-1657777039604" data-col-id="stockBuyBox" type="checkbox" checked="checked" '="">
//     <label for="stockBuyBox-1657777039604">黄金购买框: Stock</label>
// </p>
// <p data-search="黄金购买框: 目前">
//     <input id="BUY_BOX_SHIPPING_current-1657777039604" data-col-id="BUY_BOX_SHIPPING_current" type="checkbox" checked="checked" '="">
//     <label for="BUY_BOX_SHIPPING_current-1657777039604">黄金购买框: 目前</label>
// </p>
// <p data-search="黄金购买框: 自上次访问后的价格下降">
//     <input id="BUY_BOX_SHIPPING_deltaCustom-1657777039604" data-col-id="BUY_BOX_SHIPPING_deltaCustom" type="checkbox" '="">
//     <label for="BUY_BOX_SHIPPING_deltaCustom-1657777039604">黄金购买框: 自上次访问后的价格下降</label>
// </p>
// </div>