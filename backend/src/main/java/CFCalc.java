public class CFCalc {
    private static CFCalc calc = null;
    
    // CO2 Rates
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
        return getEmissionFactor(co) * distance;
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

    public void setGasCarRate(double n) {
        checkValidInput(n);
        gasCarRate = n;
    }

    public void setElecCarRate(double n) {
        checkValidInput(n);
        elecCarRate = n;
    }

    public void setBusRate(double n) {
        checkValidInput(n);
        busRate = n;
    }

    public void setTrainRate(double n) {
        checkValidInput(n);
        trainRate = n;
    }

    public void setCarpool(int n) {
        checkValidInput(n);
        pplPerCar = n;
    }

    public void setPplPerBus(int n) {
        checkValidInput(n);
        pplPerBus = n;
    }

    public void setPplPerTrain(int n) {
        checkValidInput(n);
        pplPerTrain = n;
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

    public int getPplPerCar() {
        return pplPerCar;
    } 
    
    public int getPplPerBus() {
        return pplPerBus;
    }
    
    public int getPplPerTrain() {
        return pplPerTrain;
    }

    public double getEmissionFactor(CommuteOption op) {
        double rate = 0;
        switch(op) {
            case WALKING:
                break;
            case BIKING:
                break;
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
                throw new IllegalArgumentException("Invalid commute option");
        }
        return rate;
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
        // Average values will be searched later lol
        // TODO: Finish this up
    }

    /**
     * Resets the amount of ppl per transportation option.
     * Average values determined from online search.
     */
    public void resetPplCount() {
        // passenger amount Init
        pplPerCar = 1;

        // TODO: Finish this up.
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