export function cmToIn(input?: number): number | undefined {
    if (!input) {
        return
    }
    return input * 0.393701;
}
export function kgToLb(input?: number): number | undefined {
    if (!input) {
        return
    }
    return input * 2.20462;
}
export function barToPsi(input?: number): number | undefined {
    if (!input) {
        return
    }
    return input * 14.5038;
}
export function lToCuft(input?: number): number | undefined {
    if (!input) {
        return
    }
    return input * 0.0353147;
}