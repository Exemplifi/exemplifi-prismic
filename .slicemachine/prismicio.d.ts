// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home Page documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *Home Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home Page → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = LandingSlice | NotificationSlice | RatingsSlice;
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
export type AllDocumentTypes = HomepageDocument;
/**
 * Primary content in Landing → Primary
 *
 */
interface LandingSliceDefaultPrimary {
    /**
     * Title field in *Landing → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: landing.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Landing → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: landing.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Landing Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Landing`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LandingSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LandingSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Landing*
 *
 */
type LandingSliceVariation = LandingSliceDefault;
/**
 * Landing Shared Slice
 *
 * - **API ID**: `landing`
 * - **Description**: `Landing`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LandingSlice = prismicT.SharedSlice<"landing", LandingSliceVariation>;
/**
 * Primary content in Notification → Primary
 *
 */
interface NotificationSliceDefaultPrimary {
    /**
     * Title field in *Notification → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: notification.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Notification → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: notification.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button field in *Notification → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: notification.primary.button
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button: prismicT.LinkField;
    /**
     * Return field in *Notification → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: notification.primary.return
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    return: prismicT.LinkField;
}
/**
 * Default variation for Notification Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Notification`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NotificationSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NotificationSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Notification*
 *
 */
type NotificationSliceVariation = NotificationSliceDefault;
/**
 * Notification Shared Slice
 *
 * - **API ID**: `notification`
 * - **Description**: `Notification`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NotificationSlice = prismicT.SharedSlice<"notification", NotificationSliceVariation>;
/**
 * Primary content in Ratings → Primary
 *
 */
interface RatingsSliceDefaultPrimary {
    /**
     * Satisfied Percent field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.satisfied_percent
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    satisfied_percent: prismicT.KeyTextField;
    /**
     * Satisfied Text field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.satisfied_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    satisfied_text: prismicT.KeyTextField;
    /**
     * Neutral Percent field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.neutral_percent
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    neutral_percent: prismicT.KeyTextField;
    /**
     * Neutral Text field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.neutral_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    neutral_text: prismicT.KeyTextField;
    /**
     * Unsatisfied Percent field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.unsatisfied_percent
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    unsatisfied_percent: prismicT.KeyTextField;
    /**
     * Unsatisfied Text field in *Ratings → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: ratings.primary.unsatisfied_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    unsatisfied_text: prismicT.KeyTextField;
}
/**
 * Default variation for Ratings Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Ratings`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RatingsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<RatingsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Ratings*
 *
 */
type RatingsSliceVariation = RatingsSliceDefault;
/**
 * Ratings Shared Slice
 *
 * - **API ID**: `ratings`
 * - **Description**: `Ratings`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RatingsSlice = prismicT.SharedSlice<"ratings", RatingsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, LandingSliceDefaultPrimary, LandingSliceDefault, LandingSliceVariation, LandingSlice, NotificationSliceDefaultPrimary, NotificationSliceDefault, NotificationSliceVariation, NotificationSlice, RatingsSliceDefaultPrimary, RatingsSliceDefault, RatingsSliceVariation, RatingsSlice };
    }
}
