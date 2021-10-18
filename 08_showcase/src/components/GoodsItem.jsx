import { useContext } from 'react';
import { ShopContext } from '../states/context';

function GoodsItem(props) {
    const { mainId, displayName, displayDescription, price, displayAssets, buyAllowed } = props;

    const { addToBasket } = useContext(ShopContext);

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    src={displayAssets[0].full_background}
                    alt={`img of ${displayName}`}
                />
            </div>
            <div className="card-content">
                <div className="card-title activator grey-text text-darken-4">{displayName}</div>
                <p>{displayDescription}</p>

                <div className="card-action info_bottom">
                    <button
                        onClick={() =>
                            addToBasket({
                                mainId,
                                displayName,
                                price,
                            })
                        }
                        className={`waves-effect waves-light ${
                            buyAllowed ? `btn` : `btn disabled`
                        }`}
                    >
                        {' '}
                        Купить{' '}
                    </button>
                    <div className="text-darken-4 right">
                        <span style={{ fontSize: '1.7rem' }}>{price.finalPrice} ₽</span>
                    </div>
                </div>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                </span>
                <p>
                    Here is some more information about this product that is only revealed once
                    clicked on.
                </p>
            </div>
        </div>
    );
}
export default GoodsItem;
// const reqFromFNIO = {
//     result: true,
//     fullShop: true,
//     lastUpdate: {
//         date: '2021-10-01 00:30:14+00:00',
//         uid: '84c13945b8eb88540bdc5b2092809fd0c2d342c2',
//     },
//     currentRotation: {
//         Featured: '2021-10-02 00:00:00+00:00',
//         Featured2: '2021-10-02 00:00:00+00:00',
//         Daily: '2021-10-02 00:00:00+00:00',
//         BanderitaXLockerB: '2021-10-02 00:00:00+00:00',
//         TurnMusicUpB: '2021-10-02 00:00:00+00:00',
//         TurnMusicUp2B: '2021-10-02 00:00:00+00:00',
//         VenomB: '2021-10-02 00:00:00+00:00',
//     },
//     nextRotation: null,
//     carousel: null,
//     specialOfferVideo: null,
//     shop: [
//         {
//             mainId: 'EID_MyEffort_BT5Z0',
//             displayName: 'Leilt Elomr',
//             displayDescription: 'Sweeten your life. Music by Hamaki.',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/e70743acf2930ebf92dd472e1130b6eafdb16acfa0f7c0be1fa98b3d1b77457e',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_EID_MyEffort_BT5Z0',
//                     materialInstance: 'MI_EID_MyEffort',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_MyEffort_BT5Z0/MI_EID_MyEffort.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/6945031116343e509e39892524ba000b/v2/MI_EID_MyEffort/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/6945031116343e509e39892524ba000b/v2/MI_EID_MyEffort/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-10-01',
//             previousReleaseDate: null,
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 500,
//                 finalPrice: 500,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: {
//                 id: 'CreatorCollabSeries',
//                 name: 'Icon Series',
//             },
//             banner: {
//                 id: 'New',
//                 name: 'New!',
//                 intensity: 'High',
//             },
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_MyEffort_BT5Z0',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Leilt Elomr',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: {
//                         id: 'CreatorCollabSeries',
//                         name: 'Icon Series',
//                     },
//                     description: 'Sweeten your life. Music by Hamaki.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/6945031116343e509e39892524ba000b/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/6945031116343e509e39892524ba000b/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/6945031116343e509e39892524ba000b/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/6945031116343e509e39892524ba000b/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.18',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'CID_255_Athena_Commando_F_HalloweenBunny',
//             displayName: 'Bunnymoon',
//             displayDescription: 'Who are you supposed to be again?',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/23ca3fc0ecea765920785a6f4b7330b146fc8286db65e767fd46195728bd39cd',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_255_F_HalloweenBunny',
//                     materialInstance: 'MI_CID_255_F_HalloweenBunny',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_255_F_HalloweenBunny/MI_CID_255_F_HalloweenBunny.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/12c03c1-93541ff-5af344b-1243a4b/v2/MI_CID_255_F_HalloweenBunny/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/12c03c1-93541ff-5af344b-1243a4b/v2/MI_CID_255_F_HalloweenBunny/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-28',
//             previousReleaseDate: '2020-10-31',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: {
//                 id: 'Back',
//                 name: "It's Back!",
//                 intensity: 'High',
//             },
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_255_Athena_Commando_F_HalloweenBunny',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Bunnymoon',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Who are you supposed to be again?',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/12c03c1-93541ff-5af344b-1243a4b/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/12c03c1-93541ff-5af344b-1243a4b/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/12c03c1-93541ff-5af344b-1243a4b/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/12c03c1-93541ff-5af344b-1243a4b/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: ['Cosmetics.Source.ItemShop', 'Cosmetics.Filter.Season.6'],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'CID_256_Athena_Commando_M_Pumpkin',
//             displayName: 'Patch Patroller',
//             displayDescription: 'Self-appointed Grand Guardian of the Gourd.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/66251569ee4f43da047792e48b627b2a38a0b7a79709fe49b1aaff21932450e3',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_256_M_Pumpkin',
//                     materialInstance: 'MI_CID_256_M_Pumpkin',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_256_M_Pumpkin/MI_CID_256_M_Pumpkin.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/29b04c7-02291bf-1fa338a-5639b3a/v2/MI_CID_256_M_Pumpkin/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/29b04c7-02291bf-1fa338a-5639b3a/v2/MI_CID_256_M_Pumpkin/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-29',
//             previousReleaseDate: '2020-10-31',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_256_Athena_Commando_M_Pumpkin',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Patch Patroller',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Self-appointed Grand Guardian of the Gourd.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/29b04c7-02291bf-1fa338a-5639b3a/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/29b04c7-02291bf-1fa338a-5639b3a/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/29b04c7-02291bf-1fa338a-5639b3a/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/29b04c7-02291bf-1fa338a-5639b3a/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Pumpkin',
//                         name: 'Pumpkin Patch',
//                         partOf: 'Part of the Pumpkin Patch set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Pumpkin',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'Scarecrow_Bundle',
//             displayName: 'STRAW STUFFED BUNDLE',
//             displayDescription: '',
//             displayType: 'Item Bundle',
//             mainType: 'bundle',
//             offerId: 'v2:/c88643659507d6a40b9da9522268eb796280b600f4bdac019eb4307d393ea695',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_Scarecrow',
//                     materialInstance: 'MI_Bundle_Featured_Scarecrow',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_Scarecrow/MI_Bundle_Featured_Scarecrow.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/df418d96d638f0de813f0b419bd20d1c/v2/MI_Bundle_Featured_Scarecrow/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/df418d96d638f0de813f0b419bd20d1c/v2/MI_Bundle_Featured_Scarecrow/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-10-01',
//             previousReleaseDate: null,
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 5000,
//                 finalPrice: 2500,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: {
//                 id: 'vbucksoff',
//                 name: '2500 V-Bucks Off',
//                 intensity: 'Low',
//             },
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_236_Athena_Commando_F_Scarecrow',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Straw Ops',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'The harvest grows near.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9f37f37-e489900-12b8cfb-a0a6f32/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/9f37f37-e489900-12b8cfb-a0a6f32/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'BID_125_ScarecrowFemale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Birdhovel',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Keep your enemies close.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ee683da-fba26b5-6a9e50b-5fc2aaa/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ee683da-fba26b5-6a9e50b-5fc2aaa/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ee683da-fba26b5-6a9e50b-5fc2aaa/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'CID_235_Athena_Commando_M_Scarecrow',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Hay Man',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Scare. Those. Crows.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/c0845e4-143b80c-3910e1c-86686ea/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/c0845e4-143b80c-3910e1c-86686ea/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'BID_124_ScarecrowMale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Hay Nest',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Hatch a plan.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/755fe6c-1756de5-da6a516-189f42d/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/755fe6c-1756de5-da6a516-189f42d/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/755fe6c-1756de5-da6a516-189f42d/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_105_Scarecrow',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Harvester',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Reap what you sow.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/387bc01-74f3869-f996df6-ed18404/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/387bc01-74f3869-f996df6-ed18404/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'Glider_ID_082_Scarecrow',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Field Wraith',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: "Don't just scare crows, give them nightmares.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d1e10e0-9e0c705-6960698-297f6b1/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d1e10e0-9e0c705-6960698-297f6b1/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'DoubleWide',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'CID_235_Athena_Commando_M_Scarecrow',
//             displayName: 'Hay Man',
//             displayDescription: 'Scare. Those. Crows.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/5f074796b2b77e44dc2905e30a2e0a17173f2e0ef4733382e19d2e393b92a790',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_235_M_Scarecrow',
//                     materialInstance: 'MI_CID_235_M_Scarecrow',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_235_M_Scarecrow/MI_CID_235_M_Scarecrow.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/MI_CID_235_M_Scarecrow/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/MI_CID_235_M_Scarecrow/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-07',
//             previousReleaseDate: '2020-10-22',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1500,
//                 finalPrice: 1500,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_235_Athena_Commando_M_Scarecrow',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Hay Man',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Scare. Those. Crows.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/c0845e4-143b80c-3910e1c-86686ea/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/c0845e4-143b80c-3910e1c-86686ea/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/c0845e4-143b80c-3910e1c-86686ea/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'BID_124_ScarecrowMale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Hay Nest',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Hatch a plan.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/755fe6c-1756de5-da6a516-189f42d/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/755fe6c-1756de5-da6a516-189f42d/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/755fe6c-1756de5-da6a516-189f42d/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_236_Athena_Commando_F_Scarecrow',
//             displayName: 'Straw Ops',
//             displayDescription: 'The harvest grows near.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/df8fcc070f250c847503cd1d97aaf2e9b12040e097d7f4e166bf79f4f7b88183',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_236_F_Scarecrow',
//                     materialInstance: 'MI_CID_236_F_Scarecrow',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_236_F_Scarecrow/MI_CID_236_F_Scarecrow.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/MI_CID_236_F_Scarecrow/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/MI_CID_236_F_Scarecrow/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-07',
//             previousReleaseDate: '2020-10-22',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1500,
//                 finalPrice: 1500,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_236_Athena_Commando_F_Scarecrow',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Straw Ops',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'The harvest grows near.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9f37f37-e489900-12b8cfb-a0a6f32/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/9f37f37-e489900-12b8cfb-a0a6f32/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9f37f37-e489900-12b8cfb-a0a6f32/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//                 {
//                     id: 'BID_125_ScarecrowFemale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Birdhovel',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Keep your enemies close.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ee683da-fba26b5-6a9e50b-5fc2aaa/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ee683da-fba26b5-6a9e50b-5fc2aaa/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ee683da-fba26b5-6a9e50b-5fc2aaa/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -6,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'Pickaxe_ID_105_Scarecrow',
//             displayName: 'Harvester',
//             displayDescription: 'Reap what you sow.',
//             displayType: 'Harvesting Tool',
//             mainType: 'pickaxe',
//             offerId: 'v2:/4a85716704fddc5798ea663540aea28337fb32e7417ad96a34306b83d8fa0ae5',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Pickaxe_ID_105_Scarecrow',
//                     materialInstance: 'MI_Pickaxe_ID_105_Scarecrow',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_105_Scarecrow/MI_Pickaxe_ID_105_Scarecrow.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/MI_Pickaxe_ID_105_Scarecrow/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/MI_Pickaxe_ID_105_Scarecrow/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-07',
//             previousReleaseDate: '2020-10-22',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Pickaxe_ID_105_Scarecrow',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Harvester',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Reap what you sow.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/387bc01-74f3869-f996df6-ed18404/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/387bc01-74f3869-f996df6-ed18404/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/387bc01-74f3869-f996df6-ed18404/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -7,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'Glider_ID_082_Scarecrow',
//             displayName: 'Field Wraith',
//             displayDescription: "Don't just scare crows, give them nightmares.",
//             displayType: 'Glider',
//             mainType: 'glider',
//             offerId: 'v2:/86bd5461de8ac9c0086d3f8501a555c5dd05576429ca2b466d194ba22e43d22d',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Glider_ID_082_Scarecrow',
//                     materialInstance: 'MI_Glider_ID_082_Scarecrow',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Glider_ID_082_Scarecrow/MI_Glider_ID_082_Scarecrow.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/MI_Glider_ID_082_Scarecrow/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/MI_Glider_ID_082_Scarecrow/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-07',
//             previousReleaseDate: '2020-10-22',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Glider_ID_082_Scarecrow',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Field Wraith',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: "Don't just scare crows, give them nightmares.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d1e10e0-9e0c705-6960698-297f6b1/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d1e10e0-9e0c705-6960698-297f6b1/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d1e10e0-9e0c705-6960698-297f6b1/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                     ],
//                 },
//             ],
//             priority: -8,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'ScarecrowWrapBundle',
//             displayName: 'STRAW STUFFED WRAPS',
//             displayDescription: '',
//             displayType: 'Wrap',
//             mainType: 'bundle',
//             offerId: 'v2:/67de0afb4c6ee02308fd5361b327ba5e8d66b209ae05d274d2b34a9913d341d1',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Featured_ScarecrowWrapBundle',
//                     materialInstance: 'MI_Featured_ScarecrowWrapBundle',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Featured_ScarecrowWrapBundle/MI_Featured_ScarecrowWrapBundle.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/2b923967e6afae9a429aa1f0a443ef9d/v2/MI_Featured_ScarecrowWrapBundle/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/2b923967e6afae9a429aa1f0a443ef9d/v2/MI_Featured_ScarecrowWrapBundle/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2020-10-01',
//             previousReleaseDate: '2020-10-22',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 300,
//                 finalPrice: 300,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Wrap_163_Scarecrow_Female',
//                     type: {
//                         id: 'wrap',
//                         name: 'Wrap',
//                     },
//                     name: 'Stitchy',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Show your style.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ab363acd4923d49be91222f6481a62d3/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/ab363acd4923d49be91222f6481a62d3/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab363acd4923d49be91222f6481a62d3/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab363acd4923d49be91222f6481a62d3/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.11',
//                     ],
//                 },
//                 {
//                     id: 'Wrap_164_Scarecrow_Male',
//                     type: {
//                         id: 'wrap',
//                         name: 'Wrap',
//                     },
//                     name: 'Threads',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Show your style.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/0235e3559ab1d1771aaa84aff4d58255/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/0235e3559ab1d1771aaa84aff4d58255/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/0235e3559ab1d1771aaa84aff4d58255/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/0235e3559ab1d1771aaa84aff4d58255/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Scarecrow',
//                         name: 'Straw Stuffed',
//                         partOf: 'Part of the Straw Stuffed set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.Scarecrow',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.11',
//                     ],
//                 },
//             ],
//             priority: -9,
//             section: {
//                 id: 'Featured',
//                 name: 'Featured',
//                 landingPriority: 70,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_310_Athena_Commando_F_StreetGoth',
//             displayName: 'Lace',
//             displayDescription: 'Lives for the thrill of the frill.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/f203eec0d6af63883e84ed58c42a38c778c30a9788b85597c0e34117da9dbd7a',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_310_F_StreetGoth',
//                     materialInstance: 'MI_CID_310_F_StreetGoth',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_310_F_StreetGoth/MI_CID_310_F_StreetGoth.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/MI_CID_310_F_StreetGoth/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/MI_CID_310_F_StreetGoth/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_310_F_StreetGoth',
//                     materialInstance: 'MI_CID_310_F_StreetGoth_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_310_F_StreetGoth/MI_CID_310_F_StreetGoth_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/MI_CID_310_F_StreetGoth_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/MI_CID_310_F_StreetGoth_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-01-13',
//             previousReleaseDate: '2021-09-02',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1500,
//                 finalPrice: 1500,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_310_Athena_Commando_F_StreetGoth',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Lace',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Lives for the thrill of the frill.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/eda4913-c868e30-42291e9-4a1ddcf/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/eda4913-c868e30-42291e9-4a1ddcf/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/eda4913-c868e30-42291e9-4a1ddcf/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//                 {
//                     id: 'BID_190_StreetGothFemale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Stitches',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Sown into your nightmares.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/c7b1d66-38e2b1e-f7056fc-afdd55b/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/c7b1d66-38e2b1e-f7056fc-afdd55b/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/c7b1d66-38e2b1e-f7056fc-afdd55b/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_309_Athena_Commando_M_StreetGoth',
//             displayName: 'Paradox',
//             displayDescription: 'Strike the impossible balance.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/ddbd74a548f640c3a8619bd501de3a7632719c03fb71dde6f26e0e109c3ab840',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_309_M_StreetGoth',
//                     materialInstance: 'MI_CID_309_M_StreetGoth',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_309_M_StreetGoth/MI_CID_309_M_StreetGoth.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f9b2ae5-3c98b8b-d82fded-33d88b7/v2/MI_CID_309_M_StreetGoth/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f9b2ae5-3c98b8b-d82fded-33d88b7/v2/MI_CID_309_M_StreetGoth/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-01-13',
//             previousReleaseDate: '2021-09-02',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1500,
//                 finalPrice: 1500,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_309_Athena_Commando_M_StreetGoth',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Paradox',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Strike the impossible balance.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f9b2ae5-3c98b8b-d82fded-33d88b7/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f9b2ae5-3c98b8b-d82fded-33d88b7/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f9b2ae5-3c98b8b-d82fded-33d88b7/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f9b2ae5-3c98b8b-d82fded-33d88b7/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//                 {
//                     id: 'BID_189_StreetGothMale',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Eternal',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Unbounded.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ce7ffea-378d277-7a54a75-3b4112c/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ce7ffea-378d277-7a54a75-3b4112c/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ce7ffea-378d277-7a54a75-3b4112c/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'Pickaxe_ID_140_StreetGoth',
//             displayName: 'Vision',
//             displayDescription: 'Unending gaze.',
//             displayType: 'Harvesting Tool',
//             mainType: 'pickaxe',
//             offerId: 'v2:/d749e5ead396b234a78cfe1603287ccba44d5af0c0282eb274c05ede1411f681',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Pickaxe_ID_140_StreetGoth',
//                     materialInstance: 'MI_Pickaxe_ID_140_StreetGoth',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_140_StreetGoth/MI_Pickaxe_ID_140_StreetGoth.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/dd690be-dacba62-13998ad-a50a04c/v2/MI_Pickaxe_ID_140_StreetGoth/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/dd690be-dacba62-13998ad-a50a04c/v2/MI_Pickaxe_ID_140_StreetGoth/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-01-13',
//             previousReleaseDate: '2021-09-02',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Pickaxe_ID_140_StreetGoth',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Vision',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Unending gaze.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/dd690be-dacba62-13998ad-a50a04c/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/dd690be-dacba62-13998ad-a50a04c/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/dd690be-dacba62-13998ad-a50a04c/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/dd690be-dacba62-13998ad-a50a04c/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'Glider_ID_109_StreetGoth',
//             displayName: 'Equilibrium',
//             displayDescription: 'Perfectly balanced.',
//             displayType: 'Glider',
//             mainType: 'glider',
//             offerId: 'v2:/837704392f48ca02a0c1d24bc52c8eadf2436a799912f533298038d076b6aa59',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Glider_ID_109_StreetGoth',
//                     materialInstance: 'MI_Glider_ID_109_StreetGoth',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Glider_ID_109_StreetGoth/MI_Glider_ID_109_StreetGoth.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/cda7c43-526f959-5160326-dd0b73e/v2/MI_Glider_ID_109_StreetGoth/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/cda7c43-526f959-5160326-dd0b73e/v2/MI_Glider_ID_109_StreetGoth/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-01-13',
//             previousReleaseDate: '2021-09-02',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 500,
//                 finalPrice: 500,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Glider_ID_109_StreetGoth',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Equilibrium',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Perfectly balanced.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/cda7c43-526f959-5160326-dd0b73e/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/cda7c43-526f959-5160326-dd0b73e/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/cda7c43-526f959-5160326-dd0b73e/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/cda7c43-526f959-5160326-dd0b73e/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'StreetGoth',
//                         name: 'Ouroboros',
//                         partOf: 'Part of the Ouroboros set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.StreetGoth',
//                         'Cosmetics.Filter.Season.7',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_034_Athena_Commando_F_Medieval',
//             displayName: 'Red Knight',
//             displayDescription: 'The red menace of Anarchy Acres.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/28928b7a54cb2df3d63cf847f143865c8d281daa9b18e378195345b6ce2186a2',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_034_F_Medieval',
//                     materialInstance: 'MI_CID_034_F_Medieval',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_034_F_Medieval/MI_CID_034_F_Medieval.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/b872ad3-923e9b4-ca31120-077f563/v2/MI_CID_034_F_Medieval/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/b872ad3-923e9b4-ca31120-077f563/v2/MI_CID_034_F_Medieval/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2017-12-15',
//             previousReleaseDate: '2021-09-01',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 2000,
//                 finalPrice: 2000,
//             },
//             rarity: {
//                 id: 'Legendary',
//                 name: 'LEGENDARY',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_034_Athena_Commando_F_Medieval',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Red Knight',
//                     rarity: {
//                         id: 'Legendary',
//                         name: 'LEGENDARY',
//                     },
//                     series: null,
//                     description: 'The red menace of Anarchy Acres.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b872ad3-923e9b4-ca31120-077f563/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/b872ad3-923e9b4-ca31120-077f563/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b872ad3-923e9b4-ca31120-077f563/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b872ad3-923e9b4-ca31120-077f563/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'FortKnights',
//                         name: 'Fort Knights',
//                         partOf: 'Part of the Fort Knights set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.FortKnights',
//                         'Cosmetics.Filter.Season.1',
//                     ],
//                 },
//                 {
//                     id: 'BID_003_RedKnight',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Red Shield',
//                     rarity: {
//                         id: 'Legendary',
//                         name: 'LEGENDARY',
//                     },
//                     series: null,
//                     description: "The Red Knight's legendary shield.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/95e09f3-d62326f-9b1d609-473ebd7/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/95e09f3-d62326f-9b1d609-473ebd7/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/95e09f3-d62326f-9b1d609-473ebd7/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'FortKnights',
//                         name: 'Fort Knights',
//                         partOf: 'Part of the Fort Knights set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.FortKnights',
//                         'Cosmetics.Filter.Season.3',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'Pickaxe_ID_066_FlintlockRed',
//             displayName: 'Crimson Axe',
//             displayDescription: 'Wield, smite, repeat.',
//             displayType: 'Harvesting Tool',
//             mainType: 'pickaxe',
//             offerId: 'v2:/abe5c26df59fce092909208de502f51e8b7676dcdd3ec6cdfae043068ad8bb3a',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Pickaxe_ID_066_FlintlockRed',
//                     materialInstance: 'MI_Pickaxe_ID_066_FlintlockRed',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_066_FlintlockRed/MI_Pickaxe_ID_066_FlintlockRed.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/a751400-c1cd2df-4babbe6-59cb207/v2/MI_Pickaxe_ID_066_FlintlockRed/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/a751400-c1cd2df-4babbe6-59cb207/v2/MI_Pickaxe_ID_066_FlintlockRed/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-07-06',
//             previousReleaseDate: '2021-09-01',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Pickaxe_ID_066_FlintlockRed',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Crimson Axe',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Wield, smite, repeat.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/a751400-c1cd2df-4babbe6-59cb207/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/a751400-c1cd2df-4babbe6-59cb207/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/a751400-c1cd2df-4babbe6-59cb207/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/a751400-c1cd2df-4babbe6-59cb207/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'FortKnights',
//                         name: 'Fort Knights',
//                         partOf: 'Part of the Fort Knights set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.FortKnights',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.4',
//                     ],
//                 },
//             ],
//             priority: -6,
//             section: {
//                 id: 'Featured2',
//                 name: null,
//                 landingPriority: 64,
//             },
//             groupIndex: 0,
//             storeName: 'BRWeeklyStorefront',
//             tileSize: 'Normal',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'CID_027_Athena_Commando_F',
//             displayName: 'Survival Specialist',
//             displayDescription: 'Rare Survival Specialist outfit. ',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/381fb92619ca8178fb56bf6e125fab45c0922d8adbf1efb2169f9f5d2ab4abac',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_027_F',
//                     materialInstance: 'MI_CID_027_F',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_027_F/MI_CID_027_F.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/c5f76d6-e532d99-5ac26ec-49101c3/v2/MI_CID_027_F/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/c5f76d6-e532d99-5ac26ec-49101c3/v2/MI_CID_027_F/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2017-11-05',
//             previousReleaseDate: '2021-08-23',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_027_Athena_Commando_F',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Survival Specialist',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Rare Survival Specialist outfit. ',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/c5f76d6-e532d99-5ac26ec-49101c3/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/c5f76d6-e532d99-5ac26ec-49101c3/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/c5f76d6-e532d99-5ac26ec-49101c3/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/c5f76d6-e532d99-5ac26ec-49101c3/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.1',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Normal',
//             categories: ['zzDaily 01'],
//         },
//         {
//             mainId: 'CID_037_Athena_Commando_F_WinterCamo',
//             displayName: 'Arctic Assassin',
//             displayDescription: 'Stay frosty.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/77285a60db74fc2f55e82111d1d3f921ae521b0c27422e33c0ded9ea5f1cf5ef',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_cid_037_f_wintercamo',
//                     materialInstance: 'MI_CID_037_f_wintercamo',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_cid_037_f_wintercamo/MI_CID_037_f_wintercamo.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/b9a7bce-41d9544-15b51ec-f0f729a/v2/MI_CID_037_f_wintercamo/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/b9a7bce-41d9544-15b51ec-f0f729a/v2/MI_CID_037_f_wintercamo/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-01-19',
//             previousReleaseDate: '2021-08-18',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_037_Athena_Commando_F_WinterCamo',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Arctic Assassin',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Stay frosty.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b9a7bce-41d9544-15b51ec-f0f729a/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/b9a7bce-41d9544-15b51ec-f0f729a/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b9a7bce-41d9544-15b51ec-f0f729a/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b9a7bce-41d9544-15b51ec-f0f729a/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'ArcticCommand',
//                         name: 'Arctic Command',
//                         partOf: 'Part of the Arctic Command set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.ArcticCommand',
//                         'Cosmetics.Filter.Season.1',
//                     ],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Normal',
//             categories: ['zzDaily 02'],
//         },
//         {
//             mainId: 'EID_JustHome',
//             displayName: 'The Renegade',
//             displayDescription: 'Win big.',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/3f10b6ad145f42b8981ea819a4081067d322670b8e9f18e842e52be8c22b2e72',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_EID_JustHome',
//                     materialInstance: 'MI_EID_JustHome',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_JustHome/MI_EID_JustHome.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/add898e5a8f0bc2fa9afb21435603869/v2/MI_EID_JustHome/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/add898e5a8f0bc2fa9afb21435603869/v2/MI_EID_JustHome/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2020-07-18',
//             previousReleaseDate: '2021-08-29',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 500,
//                 finalPrice: 500,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: {
//                 id: 'CreatorCollabSeries',
//                 name: 'Icon Series',
//             },
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_JustHome',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'The Renegade',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: {
//                         id: 'CreatorCollabSeries',
//                         name: 'Icon Series',
//                     },
//                     description: 'Win big.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/add898e5a8f0bc2fa9afb21435603869/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/add898e5a8f0bc2fa9afb21435603869/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/add898e5a8f0bc2fa9afb21435603869/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/add898e5a8f0bc2fa9afb21435603869/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.13',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Small',
//             categories: ['zzDaily 03'],
//         },
//         {
//             mainId: 'Pickaxe_ID_074_SharpDresser',
//             displayName: 'Studded Axe',
//             displayDescription: 'Edgy.',
//             displayType: 'Harvesting Tool',
//             mainType: 'pickaxe',
//             offerId: 'v2:/b6ef944445adfb6a0a13173755d8e9d6e7addfbad4128dc05a31555c65f61c26',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Pickaxe_ID_074_SharpDresser',
//                     materialInstance: 'MI_Pickaxe_ID_074_SharpDresser',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_074_SharpDresser/MI_Pickaxe_ID_074_SharpDresser.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f33b9ce-7202975-6778b2d-3fc30e2/v2/MI_Pickaxe_ID_074_SharpDresser/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f33b9ce-7202975-6778b2d-3fc30e2/v2/MI_Pickaxe_ID_074_SharpDresser/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-07-13',
//             previousReleaseDate: '2021-08-31',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Pickaxe_ID_074_SharpDresser',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Studded Axe',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Edgy.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f33b9ce-7202975-6778b2d-3fc30e2/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f33b9ce-7202975-6778b2d-3fc30e2/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f33b9ce-7202975-6778b2d-3fc30e2/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f33b9ce-7202975-6778b2d-3fc30e2/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'SharpDresser',
//                         name: 'Sharp Style',
//                         partOf: 'Part of the Sharp Style set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Set.SharpDresser',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.5',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Small',
//             categories: ['zzDaily 04'],
//         },
//         {
//             mainId: 'EID_ShallWe',
//             displayName: 'Shanty for a Squad',
//             displayDescription: 'Keep the tempo and catch the wave.',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/c7e40fcc0a1040d98b9fbef159bede7dbc7dc2ff9bc5f9c73425ba1388280489',
//             displayAssets: [
//                 {
//                     displayAsset: 'dav2_eid_shallwe',
//                     materialInstance: 'MI_EID_ShallWe',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/dav2_eid_shallwe/MI_EID_ShallWe.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f6a0f54faec5649dac8dd286c7786aca/v2/MI_EID_ShallWe/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f6a0f54faec5649dac8dd286c7786aca/v2/MI_EID_ShallWe/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-03-04',
//             previousReleaseDate: '2021-08-23',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 500,
//                 finalPrice: 500,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'syncedshanty',
//                 text: 'Group Emote! Join in the song with other players who are using the Shanty for a Squad Emote!',
//             },
//             granted: [
//                 {
//                     id: 'EID_ShallWe',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Shanty for a Squad',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Keep the tempo and catch the wave.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f6a0f54faec5649dac8dd286c7786aca/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f6a0f54faec5649dac8dd286c7786aca/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f6a0f54faec5649dac8dd286c7786aca/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f6a0f54faec5649dac8dd286c7786aca/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.UserFacingFlags.Emote.Traversal',
//                         'Cosmetics.Filter.Season.15',
//                         'Cosmetics.UserFacingFlags.Synced',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Small',
//             categories: ['zzDaily 05'],
//         },
//         {
//             mainId: 'EID_TPose',
//             displayName: 'T-Pose',
//             displayDescription: 'Chin up, arms straight!',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/4c79f18ce6054a8c0569503db63067a6a7e449ecf79809f901a16bf92ebe6726',
//             displayAssets: [
//                 {
//                     displayAsset: null,
//                     materialInstance: null,
//                     url: 'https://media.fortniteapi.io/images/b505c0f-2a85fb6-cb3be00-8e338a8/full_featured.png',
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/b505c0f-2a85fb6-cb3be00-8e338a8/v2/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/b505c0f-2a85fb6-cb3be00-8e338a8/v2/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-10-07',
//             previousReleaseDate: '2021-08-23',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 200,
//                 finalPrice: 200,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_TPose',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'T-Pose',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Chin up, arms straight!',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b505c0f-2a85fb6-cb3be00-8e338a8/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/b505c0f-2a85fb6-cb3be00-8e338a8/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b505c0f-2a85fb6-cb3be00-8e338a8/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b505c0f-2a85fb6-cb3be00-8e338a8/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.6',
//                         'Cosmetics.QuestsMetaData.Emote.TPose',
//                         'Phoebe.Cosmetic.Minus.Zone1',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                     ],
//                 },
//             ],
//             priority: -6,
//             section: {
//                 id: 'Daily',
//                 name: 'Daily',
//                 landingPriority: 60,
//             },
//             groupIndex: 0,
//             storeName: 'BRDailyStorefront',
//             tileSize: 'Small',
//             categories: ['zzDaily 06'],
//         },
//         {
//             mainId: 'Architect_PizzaPit_Bundle',
//             displayName: "BANDERITAX'S LOCKER BUNDLE",
//             displayDescription: '',
//             displayType: '5 Item Bundle',
//             mainType: 'bundle',
//             offerId: 'v2:/12ecd55da92f80b6cc6db6395affc671e23b4ecca712c001f15451f91fe673e9',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_PizzaPit',
//                     materialInstance: 'MI_Bundle_Featured_PizzaPit',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_PizzaPit/MI_Bundle_Featured_PizzaPit.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/78b0af040a7f4d86014a41ad4d85f958/v2/MI_Bundle_Featured_PizzaPit/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/78b0af040a7f4d86014a41ad4d85f958/v2/MI_Bundle_Featured_PizzaPit/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_PizzaPit',
//                     materialInstance: 'MI_Bundle_Featured_PizzaPit_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_PizzaPit/MI_Bundle_Featured_PizzaPit_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/78b0af040a7f4d86014a41ad4d85f958/v2/MI_Bundle_Featured_PizzaPit_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/78b0af040a7f4d86014a41ad4d85f958/v2/MI_Bundle_Featured_PizzaPit_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-05-03',
//             previousReleaseDate: '2021-05-04',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 3100,
//                 finalPrice: 2000,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: {
//                 id: 'vbucksoff',
//                 name: '1100 V-Bucks Off',
//                 intensity: 'Low',
//             },
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_482_Athena_Commando_F_PizzaPit',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'PJ Pepperoni',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Cozy combat, fresh to your door. ',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/3c436afcf6838714b4102b0a779247ab/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'PizzaPit',
//                         name: 'Pizza Pit',
//                         partOf: 'Part of the Pizza Pit set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.PizzaPit',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//                 {
//                     id: 'BID_315_PizzaPit',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Cheesy',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: "Lookin' sharp. ",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/7c6b10e1925f78552e51d9bf23a7951d/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/7c6b10e1925f78552e51d9bf23a7951d/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/7c6b10e1925f78552e51d9bf23a7951d/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'PizzaPit',
//                         name: 'Pizza Pit',
//                         partOf: 'Part of the Pizza Pit set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.PizzaPit',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_084_DurrburgerHero',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Patty Whacker',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "If you can't stand the heat...",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ab408ac-42a6265-c49344f-4080e88/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/ab408ac-42a6265-c49344f-4080e88/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'DurrrBurger',
//                         name: 'Durrr Burger',
//                         partOf: 'Part of the Durrr Burger set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.DurrrBurger',
//                         'Cosmetics.Filter.Season.5',
//                     ],
//                 },
//                 {
//                     id: 'Glider_ID_059_DurrburgerHero',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Flying Saucer',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Make mine a Royale.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/8490067-024d217-5f39ca7-1a3f25f/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/8490067-024d217-5f39ca7-1a3f25f/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'DurrrBurger',
//                         name: 'Durrr Burger',
//                         partOf: 'Part of the Durrr Burger set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.DurrrBurger',
//                         'Cosmetics.Filter.Season.5',
//                     ],
//                 },
//                 {
//                     id: 'EID_RageQuit',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Rage Quit',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "I'm out. ",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1afe711f52ff83df3ee5d27ff12e9057/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1afe711f52ff83df3ee5d27ff12e9057/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                         'Phoebe.Cosmetic.Minus.Zone1',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'BanderitaXLockerB',
//                 name: "BanderitaX's Locker",
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'DoubleWide',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'CID_482_Athena_Commando_F_PizzaPit',
//             displayName: 'PJ Pepperoni',
//             displayDescription: 'Cozy combat, fresh to your door. ',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/b78150ab0b2b27ab9733cd83a28591424a68e1d84725c3369b026b05e989c2af',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_482_f_PizzaPitt',
//                     materialInstance: 'MI_CID_482_f_PizzaPitt',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_482_f_PizzaPitt/MI_CID_482_f_PizzaPitt.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/MI_CID_482_f_PizzaPitt/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/MI_CID_482_f_PizzaPitt/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-09-23',
//             previousReleaseDate: '2021-07-01',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'CID_482_Athena_Commando_F_PizzaPit',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'PJ Pepperoni',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Cozy combat, fresh to your door. ',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/3c436afcf6838714b4102b0a779247ab/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/3c436afcf6838714b4102b0a779247ab/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'PizzaPit',
//                         name: 'Pizza Pit',
//                         partOf: 'Part of the Pizza Pit set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.PizzaPit',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//                 {
//                     id: 'BID_315_PizzaPit',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Cheesy',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: "Lookin' sharp. ",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/7c6b10e1925f78552e51d9bf23a7951d/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/7c6b10e1925f78552e51d9bf23a7951d/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/7c6b10e1925f78552e51d9bf23a7951d/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'PizzaPit',
//                         name: 'Pizza Pit',
//                         partOf: 'Part of the Pizza Pit set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.PizzaPit',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'BanderitaXLockerB',
//                 name: "BanderitaX's Locker",
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'Pickaxe_ID_084_DurrburgerHero',
//             displayName: 'Patty Whacker',
//             displayDescription: "If you can't stand the heat...",
//             displayType: 'Harvesting Tool',
//             mainType: 'pickaxe',
//             offerId: 'v2:/2685243d9ea6d252ed87e01e0f753c16958085452aeaabe1b64c7423ae72d09e',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Pickaxe_ID_084_DurrBurgerHero',
//                     materialInstance: 'MI_Pickaxe_ID_084_DurrBurgerHero',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_084_DurrBurgerHero/MI_Pickaxe_ID_084_DurrBurgerHero.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/MI_Pickaxe_ID_084_DurrBurgerHero/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/MI_Pickaxe_ID_084_DurrBurgerHero/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-08-10',
//             previousReleaseDate: '2021-07-29',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 500,
//                 finalPrice: 500,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Pickaxe_ID_084_DurrburgerHero',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Patty Whacker',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "If you can't stand the heat...",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/ab408ac-42a6265-c49344f-4080e88/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/ab408ac-42a6265-c49344f-4080e88/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/ab408ac-42a6265-c49344f-4080e88/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'DurrrBurger',
//                         name: 'Durrr Burger',
//                         partOf: 'Part of the Durrr Burger set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.DurrrBurger',
//                         'Cosmetics.Filter.Season.5',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'BanderitaXLockerB',
//                 name: "BanderitaX's Locker",
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'Glider_ID_059_DurrburgerHero',
//             displayName: 'Flying Saucer',
//             displayDescription: 'Make mine a Royale.',
//             displayType: 'Glider',
//             mainType: 'glider',
//             offerId: 'v2:/241950dcca29d18ede4d26533863f99cf65c9b2dca24f642859288c9e4759d95',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Glider_ID_059_DurrBurgerHero',
//                     materialInstance: 'MI_Glider_ID_059_DurrBurgerHero',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Glider_ID_059_DurrBurgerHero/MI_Glider_ID_059_DurrBurgerHero.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/MI_Glider_ID_059_DurrBurgerHero/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/MI_Glider_ID_059_DurrBurgerHero/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2018-08-10',
//             previousReleaseDate: '2021-07-29',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Glider_ID_059_DurrburgerHero',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Flying Saucer',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: null,
//                     description: 'Make mine a Royale.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/8490067-024d217-5f39ca7-1a3f25f/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/8490067-024d217-5f39ca7-1a3f25f/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/8490067-024d217-5f39ca7-1a3f25f/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'DurrrBurger',
//                         name: 'Durrr Burger',
//                         partOf: 'Part of the Durrr Burger set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.DurrrBurger',
//                         'Cosmetics.Filter.Season.5',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'BanderitaXLockerB',
//                 name: "BanderitaX's Locker",
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'EID_RageQuit',
//             displayName: 'Rage Quit',
//             displayDescription: "I'm out. ",
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/f561f9b3f99190af11c1d88aca6dd88785b8e1fd75da17799aacaaa627b0f9b8',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_EID_RageQuit',
//                     materialInstance: 'MI_EID_RageQuit',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_RageQuit/MI_EID_RageQuit.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/MI_EID_RageQuit/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/MI_EID_RageQuit/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2019-09-25',
//             previousReleaseDate: '2021-08-23',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 200,
//                 finalPrice: 200,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_RageQuit',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Rage Quit',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "I'm out. ",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1afe711f52ff83df3ee5d27ff12e9057/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1afe711f52ff83df3ee5d27ff12e9057/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1afe711f52ff83df3ee5d27ff12e9057/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                         'Phoebe.Cosmetic.Minus.Zone1',
//                         'Cosmetics.Filter.Season.10',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'BanderitaXLockerB',
//                 name: "BanderitaX's Locker",
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 01'],
//         },
//         {
//             mainId: 'EID_Caller',
//             displayName: 'Lights up',
//             displayDescription: 'This is my song!',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/7ca8d468c491e03f3d7eb435da3961f65718616098c93b61951d19641cd4ea94',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_EID_Caller',
//                     materialInstance: 'MI_EID_Caller',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_Caller/MI_EID_Caller.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d3c7791454c46281042dbadb4d667fe3/v2/MI_EID_Caller/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d3c7791454c46281042dbadb4d667fe3/v2/MI_EID_Caller/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-09-05',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 200,
//                 finalPrice: 200,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_Caller',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Lights up',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'This is my song!',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d3c7791454c46281042dbadb4d667fe3/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d3c7791454c46281042dbadb4d667fe3/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d3c7791454c46281042dbadb4d667fe3/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d3c7791454c46281042dbadb4d667fe3/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'EID_PatPat',
//             displayName: 'Bear Hug',
//             displayDescription: 'Bring it in.',
//             displayType: 'Emote',
//             mainType: 'emote',
//             offerId: 'v2:/fbcd5de9fad956c7308a809d717a2c6668982b8a176b23196f59e97f5ad361ed',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_EID_PatPat',
//                     materialInstance: 'MI_EID_PatPat',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_PatPat/MI_EID_PatPat.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/5ec9ce7cdda2ff09673b16c948d7d1c2/v2/MI_EID_PatPat/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/5ec9ce7cdda2ff09673b16c948d7d1c2/v2/MI_EID_PatPat/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-09-05',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 200,
//                 finalPrice: 200,
//             },
//             rarity: {
//                 id: 'Uncommon',
//                 name: 'UNCOMMON',
//             },
//             series: null,
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'EID_PatPat',
//                     type: {
//                         id: 'emote',
//                         name: 'Emote',
//                     },
//                     name: 'Bear Hug',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: 'Bring it in.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/5ec9ce7cdda2ff09673b16c948d7d1c2/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/5ec9ce7cdda2ff09673b16c948d7d1c2/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/5ec9ce7cdda2ff09673b16c948d7d1c2/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/5ec9ce7cdda2ff09673b16c948d7d1c2/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Dance',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.UserFacingFlags.Synced',
//                         'Cosmetics.Filter.Season.17',
//                     ],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_A_168_Athena_Commando_F_Stands',
//             displayName: 'Melody Maverick',
//             displayDescription: 'Stay in key, no matter what.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/093e809e14da32491c0585bb60dc88825b5c9e68954ce4df4499be06f4410f0d',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_168_F_Stands',
//                     materialInstance: 'MI_CID_A_168_F_Stands',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_168_F_Stands/MI_CID_A_168_F_Stands.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/MI_CID_A_168_F_Stands/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/MI_CID_A_168_F_Stands/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_168_F_Stands',
//                     materialInstance: 'MI_CID_A_168_F_Stands_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_168_F_Stands/MI_CID_A_168_F_Stands_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/MI_CID_A_168_F_Stands_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/MI_CID_A_168_F_Stands_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: {
//                 id: 'MusicianPickaxe',
//                 name: 'Reacts to music!',
//                 intensity: 'High',
//             },
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_168_Athena_Commando_F_Stands',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Melody Maverick',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Stay in key, no matter what.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9251417dc9c01cb8c84a1b0fddb751d0/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/9251417dc9c01cb8c84a1b0fddb751d0/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_A_171_Athena_Commando_F_Stands_D',
//             displayName: 'Harmonizer',
//             displayDescription: 'Put on a showstopping performance.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/38c7022a169eb186fb95fbbcc153d73445a870b1beb395b97895c3479904eb31',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_171_F_Stands_D',
//                     materialInstance: 'MI_CID_A_171_F_Stands_D',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_171_F_Stands_D/MI_CID_A_171_F_Stands_D.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/MI_CID_A_171_F_Stands_D/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/MI_CID_A_171_F_Stands_D/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_171_F_Stands_D',
//                     materialInstance: 'MI_CID_A_171_F_Stands_D_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_171_F_Stands_D/MI_CID_A_171_F_Stands_D_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/MI_CID_A_171_F_Stands_D_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/MI_CID_A_171_F_Stands_D_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_171_Athena_Commando_F_Stands_D',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Harmonizer',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Put on a showstopping performance.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f65050eab6dab868b212387161f1df6e/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f65050eab6dab868b212387161f1df6e/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_A_169_Athena_Commando_F_Stands_B',
//             displayName: 'Band Pass',
//             displayDescription: 'Pitch perfect on the battlefield.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/e4d922de34bab440b4ef8e1c54beaed502199d96fd0edbe7db86c76eb0d225eb',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_169_F_Stands_B',
//                     materialInstance: 'MI_CID_A_169_F_Stands_B',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_169_F_Stands_B/MI_CID_A_169_F_Stands_B.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/MI_CID_A_169_F_Stands_B/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/MI_CID_A_169_F_Stands_B/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_169_F_Stands_B',
//                     materialInstance: 'MI_CID_A_169_F_Stands_B_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_169_F_Stands_B/MI_CID_A_169_F_Stands_B_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/MI_CID_A_169_F_Stands_B_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/MI_CID_A_169_F_Stands_B_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_169_Athena_Commando_F_Stands_B',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Band Pass',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Pitch perfect on the battlefield.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d14115ce8206079313f1eacf853a0993/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d14115ce8206079313f1eacf853a0993/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 02'],
//         },
//         {
//             mainId: 'CID_A_172_Athena_Commando_F_Stands_E',
//             displayName: 'Pop Prodigy',
//             displayDescription: 'The songstress of the summer.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/855d8050d0feda8d368ef6e8522d20d3aef9a1eb54c98140f2463e3154e587a2',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_172_F_Stands_E',
//                     materialInstance: 'MI_CID_A_172_F_Stands_E',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_172_F_Stands_E/MI_CID_A_172_F_Stands_E.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/MI_CID_A_172_F_Stands_E/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/MI_CID_A_172_F_Stands_E/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_172_F_Stands_E',
//                     materialInstance: 'MI_CID_A_172_F_Stands_E_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_172_F_Stands_E/MI_CID_A_172_F_Stands_E_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/MI_CID_A_172_F_Stands_E_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/MI_CID_A_172_F_Stands_E_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_172_Athena_Commando_F_Stands_E',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Pop Prodigy',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'The songstress of the summer.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1f30411f0f94a4e3d823dd7d5fc2eec2/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1f30411f0f94a4e3d823dd7d5fc2eec2/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -6,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_A_170_Athena_Commando_F_Stands_C',
//             displayName: 'Amplitude',
//             displayDescription: 'Ride the waveforms.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/899b8b6eab3c2cd7adc4acb2177382745ea4ed293b994a2caa3b2836eefb1b4d',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_170_F_Stands_C',
//                     materialInstance: 'MI_CID_A_170_F_Stands_C',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_170_F_Stands_C/MI_CID_A_170_F_Stands_C.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/MI_CID_A_170_F_Stands_C/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/MI_CID_A_170_F_Stands_C/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_170_F_Stands_C',
//                     materialInstance: 'MI_CID_A_170_F_Stands_C_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_170_F_Stands_C/MI_CID_A_170_F_Stands_C_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/MI_CID_A_170_F_Stands_C_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/MI_CID_A_170_F_Stands_C_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_170_Athena_Commando_F_Stands_C',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Amplitude',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Ride the waveforms.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b80232a24d16c48333a63a8bf9d4717b/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/b80232a24d16c48333a63a8bf9d4717b/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -7,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_A_165_Athena_Commando_M_Stands_C',
//             displayName: 'Reverb',
//             displayDescription: 'Climb to the top of the charts.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/f3c2d48534172a197dac6583a539faccc2d4e71546743ccc874764ff6e5f8458',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_165_M_Stands_C',
//                     materialInstance: 'MI_CID_A_165_M_Stands_C',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_165_M_Stands_C/MI_CID_A_165_M_Stands_C.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/MI_CID_A_165_M_Stands_C/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/MI_CID_A_165_M_Stands_C/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_165_M_Stands_C',
//                     materialInstance: 'MI_CID_A_165_M_Stands_C_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_165_M_Stands_C/MI_CID_A_165_M_Stands_C_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/MI_CID_A_165_M_Stands_C_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/MI_CID_A_165_M_Stands_C_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_165_Athena_Commando_M_Stands_C',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Reverb',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Climb to the top of the charts.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/6563f0776daa3665cbe0c4f396101a32/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/6563f0776daa3665cbe0c4f396101a32/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -8,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_A_164_Athena_Commando_M_Stands_B',
//             displayName: 'Syncopator',
//             displayDescription: 'Keep perfect 4/4 time. Everytime.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/a235ccd6e8c49342a78c4eccb4cef7117c7d45f5b8d9a8ada094189ae2fbd1e7',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_164_M_Stands_B',
//                     materialInstance: 'MI_CID_A_164_M_Stands_B',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_164_M_Stands_B/MI_CID_A_164_M_Stands_B.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/MI_CID_A_164_M_Stands_B/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/MI_CID_A_164_M_Stands_B/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_164_M_Stands_B',
//                     materialInstance: 'MI_CID_A_164_M_Stands_B_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_164_M_Stands_B/MI_CID_A_164_M_Stands_B_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/MI_CID_A_164_M_Stands_B_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/MI_CID_A_164_M_Stands_B_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_164_Athena_Commando_M_Stands_B',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Syncopator',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Keep perfect 4/4 time. Everytime.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d0084ee764c03e7c74443aca0d64ee97/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d0084ee764c03e7c74443aca0d64ee97/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -9,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_A_163_Athena_Commando_M_Stands',
//             displayName: 'Hi-Hat',
//             displayDescription: 'Crank up the bass.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/55b3dd823980b556d62551cd5654080d8877a03d9b95a8be1dae1ac7a8a7eacd',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_163_M_Stands',
//                     materialInstance: 'MI_CID_A_163_M_Stands',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_163_M_Stands/MI_CID_A_163_M_Stands.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/MI_CID_A_163_M_Stands/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/MI_CID_A_163_M_Stands/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_163_M_Stands',
//                     materialInstance: 'MI_CID_A_163_M_Stands_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_163_M_Stands/MI_CID_A_163_M_Stands_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/MI_CID_A_163_M_Stands_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/MI_CID_A_163_M_Stands_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_163_Athena_Commando_M_Stands',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Hi-Hat',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Crank up the bass.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/baa1fd5197ed5cd0babb7ba301128545/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/baa1fd5197ed5cd0babb7ba301128545/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -10,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 03'],
//         },
//         {
//             mainId: 'CID_A_167_Athena_Commando_M_Stands_E',
//             displayName: 'Synth Striker',
//             displayDescription: 'Expand your range.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/b1838a70e0a4ce66d441df0d2baee630b27fa52a7445eab6f6a424d82bcf98fa',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_167_M_Stands_E',
//                     materialInstance: 'MI_CID_A_167_M_Stands_E',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_167_M_Stands_E/MI_CID_A_167_M_Stands_E.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/MI_CID_A_167_M_Stands_E/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/MI_CID_A_167_M_Stands_E/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_167_M_Stands_E',
//                     materialInstance: 'MI_CID_A_167_M_Stands_E_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_167_M_Stands_E/MI_CID_A_167_M_Stands_E_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/MI_CID_A_167_M_Stands_E_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/MI_CID_A_167_M_Stands_E_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_167_Athena_Commando_M_Stands_E',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Synth Striker',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Expand your range.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/7dceae32a38e03b1f0e9e75a7f30f7f6/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/7dceae32a38e03b1f0e9e75a7f30f7f6/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -11,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'CID_A_166_Athena_Commando_M_Stands_D',
//             displayName: 'Attenuator',
//             displayDescription: 'Hear all the little details.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/7f9c00e7c72241d8e46174d371299d79f019e3fe1c19463e89c1ad4a6d315722',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_166_M_Stands_D',
//                     materialInstance: 'MI_CID_A_166_M_Stands_D',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_166_M_Stands_D/MI_CID_A_166_M_Stands_D.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/MI_CID_A_166_M_Stands_D/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/MI_CID_A_166_M_Stands_D/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_166_M_Stands_D',
//                     materialInstance: 'MI_CID_A_166_M_Stands_D_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_166_M_Stands_D/MI_CID_A_166_M_Stands_D_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/MI_CID_A_166_M_Stands_D_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/MI_CID_A_166_M_Stands_D_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 1200,
//                 finalPrice: 1200,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: null,
//             offerTag: {
//                 id: 'outfitlightmusic',
//                 text: 'Outfit lights up and changes colors in response to music!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_166_Athena_Commando_M_Stands_D',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Attenuator',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Hear all the little details.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/a46224df363ffc398ae1c366d4f7ba43/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/a46224df363ffc398ae1c366d4f7ba43/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//             ],
//             priority: -12,
//             section: {
//                 id: 'TurnMusicUpB',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'StandsFemale_Bundle',
//             displayName: 'TURN IT UP BUNDLE',
//             displayDescription: '',
//             displayType: 'Item Bundle',
//             mainType: 'bundle',
//             offerId: 'v2:/b6b6f340e840e99352a7813c8235cc08c541bd1fce70811ffcac1b3352bb73f4',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_StandsFemale',
//                     materialInstance: 'MI_Bundle_Featured_StandsFemale',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_StandsFemale/MI_Bundle_Featured_StandsFemale.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f3e2d163a4be7e5b756f2280944e16a4/v2/MI_Bundle_Featured_StandsFemale/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f3e2d163a4be7e5b756f2280944e16a4/v2/MI_Bundle_Featured_StandsFemale/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_StandsFemale',
//                     materialInstance: 'MI_Bundle_Featured_StandsFemale_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_StandsFemale/MI_Bundle_Featured_StandsFemale_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f3e2d163a4be7e5b756f2280944e16a4/v2/MI_Bundle_Featured_StandsFemale_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f3e2d163a4be7e5b756f2280944e16a4/v2/MI_Bundle_Featured_StandsFemale_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 6000,
//                 finalPrice: 2800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: {
//                 id: 'vbucksoff',
//                 name: '3200 V-Bucks Off',
//                 intensity: 'Low',
//             },
//             offerTag: {
//                 id: 'outfitslightmusicbundle',
//                 text: 'Outfits light up and change colors in response to music. Bundle includes loading screen!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_168_Athena_Commando_F_Stands',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Melody Maverick',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Stay in key, no matter what.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9251417dc9c01cb8c84a1b0fddb751d0/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/9251417dc9c01cb8c84a1b0fddb751d0/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9251417dc9c01cb8c84a1b0fddb751d0/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_169_Athena_Commando_F_Stands_B',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Band Pass',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Pitch perfect on the battlefield.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d14115ce8206079313f1eacf853a0993/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d14115ce8206079313f1eacf853a0993/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d14115ce8206079313f1eacf853a0993/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_170_Athena_Commando_F_Stands_C',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Amplitude',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Ride the waveforms.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b80232a24d16c48333a63a8bf9d4717b/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/b80232a24d16c48333a63a8bf9d4717b/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b80232a24d16c48333a63a8bf9d4717b/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_171_Athena_Commando_F_Stands_D',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Harmonizer',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Put on a showstopping performance.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f65050eab6dab868b212387161f1df6e/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f65050eab6dab868b212387161f1df6e/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f65050eab6dab868b212387161f1df6e/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_172_Athena_Commando_F_Stands_E',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Pop Prodigy',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'The songstress of the summer.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1f30411f0f94a4e3d823dd7d5fc2eec2/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1f30411f0f94a4e3d823dd7d5fc2eec2/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1f30411f0f94a4e3d823dd7d5fc2eec2/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'LSID_330_RiftStack_WHFK1',
//                     type: {
//                         id: 'loadingscreen',
//                         name: 'Loading Screen',
//                     },
//                     name: 'Rotated Rift',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "It's Rift Tour all the way down. Art by FLOREY.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/257625af0a5b93d69db9e6a4690e0162/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/257625af0a5b93d69db9e6a4690e0162/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/257625af0a5b93d69db9e6a4690e0162/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/257625af0a5b93d69db9e6a4690e0162/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: ['Cosmetics.Filter.Season.17', 'Cosmetics.Source.ItemShop'],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'TurnMusicUp2B',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'DoubleWide',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'StandsMale_Bundle',
//             displayName: 'FEEL THE RHYTHM BUNDLE',
//             displayDescription: '',
//             displayType: 'Item Bundle',
//             mainType: 'bundle',
//             offerId: 'v2:/5f054a519c9dfe262caed51e79267bfa9df3d440c0679035b0c6ae96412b84fb',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_StandsMale',
//                     materialInstance: 'MI_Bundle_Featured_StandsMale',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_StandsMale/MI_Bundle_Featured_StandsMale.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/721f449d41b34eaf57e75867cf5abeca/v2/MI_Bundle_Featured_StandsMale/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/721f449d41b34eaf57e75867cf5abeca/v2/MI_Bundle_Featured_StandsMale/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_StandsMale',
//                     materialInstance: 'MI_Bundle_Featured_StandsMale_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_StandsMale/MI_Bundle_Featured_StandsMale_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/721f449d41b34eaf57e75867cf5abeca/v2/MI_Bundle_Featured_StandsMale_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/721f449d41b34eaf57e75867cf5abeca/v2/MI_Bundle_Featured_StandsMale_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-08-06',
//             previousReleaseDate: '2021-08-10',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 6000,
//                 finalPrice: 2800,
//             },
//             rarity: {
//                 id: 'Rare',
//                 name: 'RARE',
//             },
//             series: null,
//             banner: {
//                 id: 'vbucksoff',
//                 name: '3200 V-Bucks Off',
//                 intensity: 'Low',
//             },
//             offerTag: {
//                 id: 'outfitslightmusicbundle',
//                 text: 'Outfits light up and change colors in response to music. Bundle includes loading screen!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_163_Athena_Commando_M_Stands',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Hi-Hat',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Crank up the bass.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/baa1fd5197ed5cd0babb7ba301128545/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/baa1fd5197ed5cd0babb7ba301128545/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa1fd5197ed5cd0babb7ba301128545/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_164_Athena_Commando_M_Stands_B',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Syncopator',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Keep perfect 4/4 time. Everytime.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/d0084ee764c03e7c74443aca0d64ee97/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/d0084ee764c03e7c74443aca0d64ee97/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/d0084ee764c03e7c74443aca0d64ee97/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_165_Athena_Commando_M_Stands_C',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Reverb',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Climb to the top of the charts.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/6563f0776daa3665cbe0c4f396101a32/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/6563f0776daa3665cbe0c4f396101a32/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/6563f0776daa3665cbe0c4f396101a32/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_166_Athena_Commando_M_Stands_D',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Attenuator',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Hear all the little details.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/a46224df363ffc398ae1c366d4f7ba43/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/a46224df363ffc398ae1c366d4f7ba43/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/a46224df363ffc398ae1c366d4f7ba43/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'CID_A_167_Athena_Commando_M_Stands_E',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Synth Striker',
//                     rarity: {
//                         id: 'Rare',
//                         name: 'RARE',
//                     },
//                     series: null,
//                     description: 'Expand your range.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/7dceae32a38e03b1f0e9e75a7f30f7f6/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/7dceae32a38e03b1f0e9e75a7f30f7f6/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/7dceae32a38e03b1f0e9e75a7f30f7f6/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'HitStart',
//                         name: 'Press Play',
//                         partOf: 'Part of the Press Play set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.17',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.HitStart',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'LSID_325_RiftTourMKTG1_18M49',
//                     type: {
//                         id: 'loadingscreen',
//                         name: 'Loading Screen',
//                     },
//                     name: 'Knock, Knock',
//                     rarity: {
//                         id: 'Uncommon',
//                         name: 'UNCOMMON',
//                     },
//                     series: null,
//                     description: "We'll see you again soon. Created by Yuko Shimizu X MONDO.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f5b6c7540dc4749453845a7c0f9f993e/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/f5b6c7540dc4749453845a7c0f9f993e/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f5b6c7540dc4749453845a7c0f9f993e/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f5b6c7540dc4749453845a7c0f9f993e/v2/info.en.png',
//                     },
//                     set: null,
//                     video: null,
//                     audio: null,
//                     gameplayTags: ['Cosmetics.Filter.Season.17', 'Cosmetics.Source.ItemShop'],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'TurnMusicUp2B',
//                 name: 'Turn The Music Up',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'DoubleWide',
//             categories: ['Panel 04'],
//         },
//         {
//             mainId: 'ClashVBundle',
//             displayName: 'VENOM BUNDLE',
//             displayDescription: '',
//             displayType: 'Item Bundle',
//             mainType: 'bundle',
//             offerId: 'v2:/ccb512a29bd3209c893ecdda9826569952b3fba901f1ba24effbcdce6c181123',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_ClashVBundle',
//                     materialInstance: 'MI_Bundle_Featured_ClashVBundle',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_ClashVBundle/MI_Bundle_Featured_ClashVBundle.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f136693ac32f4a6feb9345661b18c4f1/v2/MI_Bundle_Featured_ClashVBundle/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f136693ac32f4a6feb9345661b18c4f1/v2/MI_Bundle_Featured_ClashVBundle/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_Bundle_Featured_ClashVBundle',
//                     materialInstance: 'MI_Bundle_Featured_ClashVBundle_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_ClashVBundle/MI_Bundle_Featured_ClashVBundle_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/f136693ac32f4a6feb9345661b18c4f1/v2/MI_Bundle_Featured_ClashVBundle_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/f136693ac32f4a6feb9345661b18c4f1/v2/MI_Bundle_Featured_ClashVBundle_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-09-24',
//             previousReleaseDate: '2021-09-30',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 4000,
//                 finalPrice: 2800,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: {
//                 id: 'MarvelSeries',
//                 name: 'MARVEL SERIES',
//             },
//             banner: {
//                 id: 'vbucksoff',
//                 name: '1200 V-Bucks Off',
//                 intensity: 'Low',
//             },
//             offerTag: {
//                 id: 'promodesc11',
//                 text: 'Bundle includes Emoticon! Only Venom can use Symbiote Slasher, and only Eddie Brock can use Symbiote Scythe. Eddie Brock transforms with emote!',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_204_Athena_Commando_M_ClashV_SQNVJ',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Eddie Brock',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'You might call them a bit of an odd couple.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/08f4fa07ace9167553ecb825a452b0a6/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/08f4fa07ace9167553ecb825a452b0a6/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Variant.ForceLoadAllParts',
//                         'Cosmetics.Exclusives.ClashV',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.UserFacingFlags.Transform',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//                 {
//                     id: 'BID_849_ClashV_D5UT3',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Tendrils of Venom',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "Now you're just making us mad.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/996ea2258a602a3f252f3ef461e4aa82/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/996ea2258a602a3f252f3ef461e4aa82/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/996ea2258a602a3f252f3ef461e4aa82/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/996ea2258a602a3f252f3ef461e4aa82/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_668_ClashVMale1H_5TA18',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Symbiote Scythe',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'As vicious as it looks.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/49eefa224a4ce6a5b2e8d6638d82d557/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/49eefa224a4ce6a5b2e8d6638d82d557/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/49eefa224a4ce6a5b2e8d6638d82d557/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Pickaxe.DualWield',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//                 {
//                     id: 'CID_934_Athena_Commando_M_Vertigo',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Venom',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "They're a complicated relationship.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1e481ade0e334ac8d61c3e27cbb30d63/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1e481ade0e334ac8d61c3e27cbb30d63/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.QuestsMetaData.Outfit.Vertigo',
//                         'Cosmetics.UserFacingFlags.BuiltInEmote',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Cosmetics.Exclusives.Vertigo',
//                     ],
//                 },
//                 {
//                     id: 'BID_650_Vertigo',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Tendril Tote',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "Don't forget the buddy system.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b1d94839ea9769d6dd49a2e59f998f69/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b1d94839ea9769d6dd49a2e59f998f69/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b1d94839ea9769d6dd49a2e59f998f69/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_504_VertigoMale',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Symbiote Slasher',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'Gooey, but sharp.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9a4d4a63cc04546f7b2058c5590f48e7/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9a4d4a63cc04546f7b2058c5590f48e7/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9a4d4a63cc04546f7b2058c5590f48e7/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Pickaxe.DualWield',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Phoebe.Cosmetic.Minus.Zone1',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                     ],
//                 },
//                 {
//                     id: 'Emoji_S18_ClashV_I1DF9',
//                     type: {
//                         id: 'emoji',
//                         name: 'Emoticon',
//                     },
//                     name: 'Different Tasty Snack',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'Express yourself on the battlefield.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/f044bdc5be6ceaa49f25f39284d75147/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/f044bdc5be6ceaa49f25f39284d75147/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/f044bdc5be6ceaa49f25f39284d75147/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.EmoteType.Emoji',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//             ],
//             priority: -1,
//             section: {
//                 id: 'VenomB',
//                 name: 'Venom',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'DoubleWide',
//             categories: ['Panel 11'],
//         },
//         {
//             mainId: 'CID_A_204_Athena_Commando_M_ClashV_SQNVJ',
//             displayName: 'Eddie Brock',
//             displayDescription: 'You might call them a bit of an odd couple.',
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/5345dec38c31d86ad1d9aef38679e29b73f58d213820f44c1b1adc08b436cef9',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_A_204_M_ClashV_Casual_SQNVJ',
//                     materialInstance: 'MI_CID_A_204_M_ClashV_Casual',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_204_M_ClashV_Casual_SQNVJ/MI_CID_A_204_M_ClashV_Casual.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/MI_CID_A_204_M_ClashV_Casual/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/MI_CID_A_204_M_ClashV_Casual/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_A_204_M_ClashV_Casual_SQNVJ',
//                     materialInstance: 'MI_CID_A_204_M_ClashV',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_204_M_ClashV_Casual_SQNVJ/MI_CID_A_204_M_ClashV.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/MI_CID_A_204_M_ClashV/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/MI_CID_A_204_M_ClashV/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-09-24',
//             previousReleaseDate: '2021-09-30',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 2000,
//                 finalPrice: 2000,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: {
//                 id: 'MarvelSeries',
//                 name: 'MARVEL SERIES',
//             },
//             banner: {
//                 id: 'TransformPickaxeIncluded',
//                 name: 'Transform! Pickaxe Included!',
//                 intensity: 'High',
//             },
//             offerTag: {
//                 id: 'promodesc10',
//                 text: 'Transform with the built-in emote! Only Eddie Brock can wield the included Symbiote Scythe.',
//             },
//             granted: [
//                 {
//                     id: 'CID_A_204_Athena_Commando_M_ClashV_SQNVJ',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Eddie Brock',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'You might call them a bit of an odd couple.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/08f4fa07ace9167553ecb825a452b0a6/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/08f4fa07ace9167553ecb825a452b0a6/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/08f4fa07ace9167553ecb825a452b0a6/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Variant.ForceLoadAllParts',
//                         'Cosmetics.Exclusives.ClashV',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.UserFacingFlags.Transform',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//                 {
//                     id: 'BID_849_ClashV_D5UT3',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Tendrils of Venom',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "Now you're just making us mad.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/996ea2258a602a3f252f3ef461e4aa82/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/996ea2258a602a3f252f3ef461e4aa82/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/996ea2258a602a3f252f3ef461e4aa82/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/996ea2258a602a3f252f3ef461e4aa82/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_668_ClashVMale1H_5TA18',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Symbiote Scythe',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'As vicious as it looks.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/49eefa224a4ce6a5b2e8d6638d82d557/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/49eefa224a4ce6a5b2e8d6638d82d557/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/49eefa224a4ce6a5b2e8d6638d82d557/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Pickaxe.DualWield',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//             ],
//             priority: -2,
//             section: {
//                 id: 'VenomB',
//                 name: 'Venom',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 11'],
//         },
//         {
//             mainId: 'CID_934_Athena_Commando_M_Vertigo',
//             displayName: 'Venom',
//             displayDescription: "They're a complicated relationship.",
//             displayType: 'Outfit',
//             mainType: 'outfit',
//             offerId: 'v2:/5df93bc1836699ddce9aff6f4ca855076a8ba137fc3a1ce202379976e4ff1900',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_CID_934_M_Vertigo',
//                     materialInstance: 'MI_CID_934_M_Vertigo',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_934_M_Vertigo/MI_CID_934_M_Vertigo.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/MI_CID_934_M_Vertigo/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/MI_CID_934_M_Vertigo/info.en.png',
//                 },
//                 {
//                     displayAsset: 'DAv2_CID_934_M_Vertigo',
//                     materialInstance: 'MI_CID_934_M_Vertigo_02',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_934_M_Vertigo/MI_CID_934_M_Vertigo_02.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/MI_CID_934_M_Vertigo_02/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/MI_CID_934_M_Vertigo_02/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2020-11-21',
//             previousReleaseDate: '2021-09-30',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 2000,
//                 finalPrice: 2000,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: {
//                 id: 'MarvelSeries',
//                 name: 'MARVEL SERIES',
//             },
//             banner: {
//                 id: 'PickaxeIncluded',
//                 name: 'Pickaxe Included!',
//                 intensity: 'High',
//             },
//             offerTag: {
//                 id: 'vertigoexclusivepickaxe',
//                 text: 'Only Venom can wield the mighty Symbiote Slasher!',
//             },
//             granted: [
//                 {
//                     id: 'CID_934_Athena_Commando_M_Vertigo',
//                     type: {
//                         id: 'outfit',
//                         name: 'Outfit',
//                     },
//                     name: 'Venom',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "They're a complicated relationship.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/1e481ade0e334ac8d61c3e27cbb30d63/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/1e481ade0e334ac8d61c3e27cbb30d63/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/1e481ade0e334ac8d61c3e27cbb30d63/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.QuestsMetaData.Outfit.Vertigo',
//                         'Cosmetics.UserFacingFlags.BuiltInEmote',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.UserFacingFlags.HasVariants',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Cosmetics.Exclusives.Vertigo',
//                     ],
//                 },
//                 {
//                     id: 'BID_650_Vertigo',
//                     type: {
//                         id: 'backpack',
//                         name: 'BackBling',
//                     },
//                     name: 'Tendril Tote',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "Don't forget the buddy system.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/b1d94839ea9769d6dd49a2e59f998f69/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/b1d94839ea9769d6dd49a2e59f998f69/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/b1d94839ea9769d6dd49a2e59f998f69/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Cosmetics.UserFacingFlags.Reactive',
//                     ],
//                 },
//                 {
//                     id: 'Pickaxe_ID_504_VertigoMale',
//                     type: {
//                         id: 'pickaxe',
//                         name: 'Harvesting Tool',
//                     },
//                     name: 'Symbiote Slasher',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'Gooey, but sharp.',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/9a4d4a63cc04546f7b2058c5590f48e7/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/9a4d4a63cc04546f7b2058c5590f48e7/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/9a4d4a63cc04546f7b2058c5590f48e7/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'InspirationExceed',
//                         name: 'Venom',
//                         partOf: 'Part of the Venom set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Pickaxe.DualWield',
//                         'Cosmetics.Filter.Season.14',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.InspirationExceed',
//                         'Phoebe.Cosmetic.Minus.Zone1',
//                         'Phoebe.Cosmetic.Minus.Zone2',
//                     ],
//                 },
//             ],
//             priority: -3,
//             section: {
//                 id: 'VenomB',
//                 name: 'Venom',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Normal',
//             categories: ['Panel 11'],
//         },
//         {
//             mainId: 'Glider_ID_317_VertigoMale_E3F81',
//             displayName: 'Symbiotic Sail',
//             displayDescription: 'So many snacks down below!',
//             displayType: 'Glider',
//             mainType: 'glider',
//             offerId: 'v2:/c8d04bf1042ddfb290050d121e68b91820e43211ab606f715f2b5c04133c2b40',
//             displayAssets: [
//                 {
//                     displayAsset: 'DAv2_Glider_ID_317_VertigoMale_E3F81',
//                     materialInstance: 'MI_Glider_ID_317_VertigoMale',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Glider_ID_317_VertigoMale_E3F81/MI_Glider_ID_317_VertigoMale.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa288d1b9966f74928aa231347ef6be/v2/MI_Glider_ID_317_VertigoMale/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/baa288d1b9966f74928aa231347ef6be/v2/MI_Glider_ID_317_VertigoMale/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-09-24',
//             previousReleaseDate: '2021-09-30',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 800,
//                 finalPrice: 800,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: {
//                 id: 'MarvelSeries',
//                 name: 'MARVEL SERIES',
//             },
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Glider_ID_317_VertigoMale_E3F81',
//                     type: {
//                         id: 'glider',
//                         name: 'Glider',
//                     },
//                     name: 'Symbiotic Sail',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: 'So many snacks down below!',
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/baa288d1b9966f74928aa231347ef6be/transparent.png',
//                         featured:
//                             'https://media.fortniteapi.io/images/baa288d1b9966f74928aa231347ef6be/full_featured.png',
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa288d1b9966f74928aa231347ef6be/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/baa288d1b9966f74928aa231347ef6be/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//             ],
//             priority: -4,
//             section: {
//                 id: 'VenomB',
//                 name: 'Venom',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 11'],
//         },
//         {
//             mainId: 'Trails_ID_102_HightowerVertigo_G63FW',
//             displayName: 'Symbiote Trail',
//             displayDescription: "Don't lose track of yourself.",
//             displayType: 'Item Bundle',
//             mainType: 'contrail',
//             offerId: 'v2:/79a78f00ec2fe24cac9f8a2e9f41dd4e6cee821dfe88b517a1d052237cb4596b',
//             displayAssets: [
//                 {
//                     displayAsset: 'Trails_ID_102_HightowerVertigo_G63FW',
//                     materialInstance: 'Trails_ID_102_HightowerVertigo_G63FW',
//                     url: 'https://media.fortniteapi.io/images/displayAssets/v2/Trails_ID_102_HightowerVertigo_G63FW/Trails_ID_102_HightowerVertigo_G63FW.png',
//                     flipbook: null,
//                     background:
//                         'https://media.fortniteapi.io/images/cosmetics/0dd9c36bc629a4b2a30d80b13568fd98/v2/Trails_ID_102_HightowerVertigo_G63FW/background.png',
//                     full_background:
//                         'https://media.fortniteapi.io/images/cosmetics/0dd9c36bc629a4b2a30d80b13568fd98/v2/Trails_ID_102_HightowerVertigo_G63FW/info.en.png',
//                 },
//             ],
//             firstReleaseDate: '2021-09-24',
//             previousReleaseDate: '2021-09-30',
//             giftAllowed: true,
//             buyAllowed: true,
//             price: {
//                 regularPrice: 400,
//                 finalPrice: 400,
//             },
//             rarity: {
//                 id: 'Epic',
//                 name: 'Epic',
//             },
//             series: {
//                 id: 'MarvelSeries',
//                 name: 'MARVEL SERIES',
//             },
//             banner: null,
//             offerTag: null,
//             granted: [
//                 {
//                     id: 'Trails_ID_102_HightowerVertigo_G63FW',
//                     type: {
//                         id: 'contrail',
//                         name: 'Contrail',
//                     },
//                     name: 'Symbiote Trail',
//                     rarity: {
//                         id: 'Epic',
//                         name: 'Epic',
//                     },
//                     series: {
//                         id: 'MarvelSeries',
//                         name: 'MARVEL SERIES',
//                     },
//                     description: "Don't lose track of yourself.",
//                     images: {
//                         icon: 'https://media.fortniteapi.io/images/0dd9c36bc629a4b2a30d80b13568fd98/transparent.png',
//                         featured: null,
//                         background:
//                             'https://media.fortniteapi.io/images/cosmetics/0dd9c36bc629a4b2a30d80b13568fd98/v2/background.png',
//                         full_background:
//                             'https://media.fortniteapi.io/images/cosmetics/0dd9c36bc629a4b2a30d80b13568fd98/v2/info.en.png',
//                     },
//                     set: {
//                         id: 'Synergy',
//                         name: 'Symbiotes',
//                         partOf: 'Part of the Symbiotes set.',
//                     },
//                     video: null,
//                     audio: null,
//                     gameplayTags: [
//                         'Cosmetics.BattlepassTrack.Display.DisableVFXDuringTransitionIn',
//                         'Cosmetics.BattlepassTrack.Display.DisableVFXDuringTransitionOut',
//                         'Cosmetics.Filter.Season.18',
//                         'Cosmetics.Source.ItemShop',
//                         'Cosmetics.Set.Synergy',
//                     ],
//                 },
//             ],
//             priority: -5,
//             section: {
//                 id: 'VenomB',
//                 name: 'Venom',
//                 landingPriority: 1,
//             },
//             groupIndex: 0,
//             storeName: 'BRSpecialFeatured',
//             tileSize: 'Small',
//             categories: ['Panel 11'],
//         },
//     ],
// };
