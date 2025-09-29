import type { RoadCondition, TrafficStats } from '../types';

export const roadConditions: RoadCondition[] = [
    {
        id: '1',
        roadName: 'М-1 "Беларусь" (въезд в город)',
        condition: 'moderate',
        speed: 45,
        description: 'Умеренное движение, средняя скорость 45 км/ч'
    },
    {
        id: '2',
        roadName: 'ул. Ленина (центр)',
        condition: 'heavy',
        speed: 25,
        description: 'Интенсивное движение в часы пик'
    },
    {
        id: '3',
        roadName: 'Объездная дорога (южная часть)',
        condition: 'free',
        speed: 65,
        description: 'Свободное движение'
    },
    {
        id: '4',
        roadName: 'ул. Кирова',
        condition: 'moderate',
        speed: 35,
        description: 'Умеренное движение'
    },
    {
        id: '5',
        roadName: 'Витебское шоссе',
        condition: 'free',
        speed: 55,
        description: 'Движение без затруднений'
    },
    {
        id: '6',
        roadName: 'ул. Дзержинского',
        condition: 'blocked',
        speed: 0,
        description: 'Временное перекрытие из-за ремонтных работ'
    }
] as const;

export const trafficStats: TrafficStats = {
    accidents: 23,
    evacuations: 156,
    fines: 2847,
    period: 'За текущий месяц'
} as const;