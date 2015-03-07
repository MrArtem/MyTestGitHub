package MyComparator;

import java.util.Comparator;

public class MyComparatorCode implements Comparator<String>{

	@Override
	public int compare(String o1, String o2) {
		// TODO Auto-generated method stub
		int vol1 = o1.length();
		int vol2 = o2.length();
		if(vol1<vol2||vol1==vol2)
		{
			for(int i=0;i<vol1;i++)
			{
				int code1 = (int)o1.charAt(i);
				int code2 = (int)o2.charAt(i);
				if(code1>code2) return 1;
				if(code1<code2) return -1;
			}
			if(vol1 == vol2) return 0;
			else return 1;
		}
		if(vol1>vol2)
		{
			for(int i=0;i<vol2;i++)
			{
				int code1 = (int)o1.charAt(i);
				int code2 = (int)o2.charAt(i);
				if(code1>code2) return 1;
				if(code1<code2) return -1;
			}
			if(vol1 == vol2) return 0;
			else return -1;
		}
		return 0;
	}

}
