import { UserQuestionSet } from '@/features/userQuestionSets/userQuestionSetsTypes';

export function isUserQuestionSet(set: unknown): set is UserQuestionSet {
    return (
        typeof set === 'object' &&
        set !== null &&
        'isCustom' in set &&
        (set as any).isCustom === true
    );
}
