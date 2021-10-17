import { CourseCategory } from './courseCategory';
import { CourseSubcategory } from './CourseSubcategory';
import { User } from './user';

export type Course = BaseSet &
  Partial<MinSet> &
  Partial<DefaultSet> &
  Partial<AllSet>;

export type CourseKeys = keyof MinSet | keyof DefaultSet | keyof AllSet;

type BaseSet = {
  _class: 'course';
  id: number;
};

//
// TODO: API によって @min の取得データが異なる ( courses と courseDetail )
//
type MinSet = {
  title: string;
  url: string;
};

type DefaultSet = {
  is_paid: boolean;
  price: string;
  price_detail: {
    amount: number;
    currency: string;
    price_string: string;
    currency_symbol: string;
  };
  price_serve_tracking_id: string;
  visible_instructors: User[];
  image_125_H: string;
  image_240x135: string;
  image_480x270: string;
  is_practice_test_course: boolean;
  published_title: string;
  tracking_id: string;
};

type AllSet = {
  primary_category: CourseCategory;
  primary_subcategory: CourseSubcategory;
  (k: typeof notCompatible[number]): any;
};

//
// TODO: 未実装の key ( 全ての設定は面倒だし、必要そうな key から実装していきたい )
//
const notCompatible = [
  'alternate_redirect_course_id',
  'apple_in_app_price_detail',
  'apple_in_app_product_id',
  'apple_in_app_purchase_price_text',
  'archive_time',
  'available_features',
  'avg_rating',
  'avg_rating_recent',
  'badges',
  'bestseller_badge_content',
  'buyable_object_type',
  'can_edit',
  'caption_languages',
  'caption_locales',
  'checkout_url',
  'client_settings',
  'common_review_attributes',
  'completion_ratio',
  'content_info',
  'content_info_short',
  'content_length_practice_test_questions',
  'content_length_video',
  'context_info',
  'course_has_labels',
  'cpe_field_of_study',
  'cpe_program_level',
  'created',
  'custom_category_ids',
  'description',
  'discount',
  'discount_price',
  'earnings',
  'enroll_url',
  'enrollment_time',
  'estimated_content_length',
  'faq',
  'favorite_time',
  'features',
  'free_course_subscribe_url',
  'gift_url',
  'google_in_app_price_detail',
  'google_in_app_product_id',
  'google_in_app_purchase_price_text',
  'has_certificate',
  'has_closed_caption',
  'has_org_only_setting',
  'has_sufficient_preview_length',
  'headline',
  'image_100x100',
  'image_200_H',
  'image_304x171',
  'image_48x27',
  'image_50x50',
  'image_750x422',
  'image_75x75',
  'image_96x54',
  'instructional_level',
  'instructional_level_simple',
  'instructor_status',
  'intended_category',
  'is_approved',
  'is_available_on_google_app',
  'is_available_on_ios',
  'is_banned',
  'is_cpe_compliant',
  'is_draft',
  'is_enrollable_on_mobile',
  'is_in_any_ufb_content_collection',
  'is_in_subscribed_content_collections',
  'is_in_user_subscription',
  'is_marketing_boost_agreed',
  'is_organization_eligible',
  'is_organization_only',
  'is_owned_by_instructor_team',
  'is_owner_terms_banned',
  'is_private',
  'is_published',
  'is_recently_published',
  'is_taking_disabled',
  'is_user_subscribed',
  'is_wishlisted',
  'landing_preview_as_guest_url',
  'last_accessed_time',
  'last_update_date',
  'learn_url',
  'locale',
  'notification_settings',
  'num_additional_assets',
  'num_article_assets',
  'num_assignments',
  'num_coding_exercises',
  'num_cpe_credits',
  'num_curriculum_items',
  'num_invitation_requests',
  'num_lectures',
  'num_of_published_curriculum_objects',
  'num_practice_tests',
  'num_published_lectures',
  'num_published_practice_tests',
  'num_published_quizzes',
  'num_quizzes',
  'num_reviews',
  'num_reviews_recent',
  'num_subscribers',
  'objectives',
  'objectives_summary',
  'organization_id',
  'original_price_text',
  'prerequisites',
  'preview_url',
  'promo_asset',
  'published_time',
  'quality_review_process',
  'quality_status',
  'rating',
  'rating_distribution',
  'requirements_data',
  'status_label',
  'subscription_locale',
  'target_audiences',
  'type_label',
  'was_ever_published',
  'what_you_will_learn_data',
  'who_should_attend_data',
] as const;
