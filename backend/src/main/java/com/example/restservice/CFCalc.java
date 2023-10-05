package main.java.com.example.restservice;

public class CFCalc {
    private static CFCalc calc = null;
    
    // CO2 Rates
    //
    private double walkRate, cycleRate, gasCarRate, elecCarRate, busRate, trainRate; 

    // carpool/public transportation people count
    private int pplPerCar, pplPerBus, pplPerTrain;

    // distance in miles
    private double distance;

    private CFCalc() {
        this(-1.0);
    }

    private CFCalc(double distanceP) {
        fullReset();
        distance = distanceP;
    }

    /**==================================================================
     * 
     * Singleton Class Getting
     *
     *===================================================================
     */
    public static CFCalc getCFCalc() {
        if (calc == null) {
            calc = new CFCalc();
        }
        return calc;
    }

    public static CFCalc getCFCalc(double distance) {
        if (calc == null) {
            calc = new CFCalc(distance);
        } else {
            calc.setDistance(distance);
        }
        return calc;
    }

    // ============= Carbon Footprint Calc ==================
    public double calcCF(CommuteOption co) {
        if (distance < 0) {
            throw new RuntimeException("Distance has not been set yet.");
        }
        return getEmissionFactor(co) * distance / ((double) getPplPerOption(co));
    }

    public double calcCF(CommuteOption co, double distance) {
        setDistance(distance);
        return calcCF(co);
    }


    /** ======================================================================
     * 
     * Setters for rates and population
     * 
     * =======================================================================
     */

    /**
     * Sets the distance to input.
     * Input must be in miles
     */
    public void setDistance(double n) {
        if (n < 0.0) {
            throw new IllegalArgumentException("Distance cannot be negative");
        }
        distance = n;
    }

    public int setRate(CommuteOption co, double n) {
        switch(co) {
            case GAS_CAR:
                gasCarRate = n;
                break;
            case ELECTRIC_CAR:
                elecCarRate = n;
                break;
            case BUS:
                busRate = n;
                break;
            case TRAIN:
                trainRate = n;
                break;
            default:
                return -1;

        }
        return 1;
    }

    public int setCarpool(CommuteOption co, int n) {
        switch(co) {
            case GAS_CAR, ELECTRIC_CAR:
                pplPerCar = n;
                break;
            case BUS:
                pplPerBus = n;
                break;
            case TRAIN:
                pplPerTrain = n;
                break;
            default:
                return -1;
        }
        return 1;
    }

    private void checkValidInput(double n) {
        if (n < 0.0) {
            throw new IllegalArgumentException("Input cannot be negative");
        }
    }

    /**================================================================================
     * 
     * Getters for all values lol
     * 
     * ================================================================================
     */
    public double getDistance() {
        return distance;
    }

    public double getEmissionFactor(CommuteOption co) {
        double rate = 0;
        switch(co) {
            case GAS_CAR:
                rate = gasCarRate;
                break;
            case ELECTRIC_CAR:
                rate = elecCarRate;
                break;
            case BUS:
                rate = busRate;
                break;
            case TRAIN:
                rate = trainRate;
                break;
            default:
                break;
        }
        return rate;
    }

    private int getPplPerOption(CommuteOption co) {
        int ppl = 1;
        switch(co) {
            case GAS_CAR, ELECTRIC_CAR:
                ppl = pplPerCar;
                break;
            case BUS:
                ppl = pplPerBus;
                break;
            case TRAIN:
                ppl = pplPerTrain;
                break;
            default:
                break;
        }
        return ppl;
    }
// ========================== RESET VALUES =================================
    /**
     * Resets the rate of the CO2 emission rates to default values.
     * Average values determined from online search.
     */
    public void resetRates() {
        // Rate Init
        walkRate = 0;
        cycleRate = 0;
        gasCarRate = 2.31; // kg CO2 per liter of gasoline

        //==============================
        // Really rough values lol
        //
        elecCarRate = .376;
        busRate = 23.92;
        trainRate = 142400;
    }

    /**W
     * Resets the amount of ppl per transportation option.
     * Average values determined from online search.
     */
    public void resetPplCount() {
        // passenger amount Init
        pplPerCar = 1;
        pplPerBus = 50;
        pplPerTrain = 500;
    }

    /**
     * 
     */
    public void fullReset() {
        resetRates();
        resetPplCount();
        distance = -1;
    }
}