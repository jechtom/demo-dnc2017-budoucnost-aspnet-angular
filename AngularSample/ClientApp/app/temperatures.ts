export class Temperatures {
    public getMessage(tempC: number) {
        if (tempC >= 40) return "Awful hot!";
        if (tempC >= 30) return "Hot";
        if (tempC >= 20) return "Just fine";
        return "Cold";
    }
}